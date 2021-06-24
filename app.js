//for passing the grid value around
let grid;
//for tracking which nodes we visit
const visited = [];

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    this.grid = grid;
    let islands = 0;

    //visited is populated based on the input grid
    for (let i of this.grid) {
        const row = [];
        for (let j of i) {
            row.push(false);
        }
        visited.push(row);
    }

    //loop the grid nodes
    for (let i = 0; i < this.grid.length; i++) {
        for (let j = 0; j < this.grid[i].length; j++) {
            //each node will be checked against visited
            //if the node has not been visited AND is an island -> we will begin our search
            if (!visited[i][j] && this.grid[i][j] === "1") {
                console.log("Island " + (islands + 1) + " starts at: " + i + "," + j);
                searchIsland(i, j);
                islands++;
            }
        }
    }

    return islands;
};

searchIsland = function(startRow, startCol) {
    //go through each node which has not been visited
    //when processing a node we need to check if there is a connection with the starting position
    
    //create a queue which will track the nodes that we need to continue travelling
    const queue = [];
    //enqueue the starting position
    queue.push([startRow, startCol]);

    //process queue until we run out of nodes
    //island is presumed completetly mapped
    while (queue.length > 0) {
        //dequeue each item
        const node = queue.shift();
        let nodeValue = this.grid[node[0]][node[1]];
        console.log("current node: " + node);
                
        //only process the node if we're on land
        if (nodeValue === "1") {
            //set visited status for the node
            visited[node[0]][node[1]] = true;

            //enqueue the 4 adjacent nodes
            let adjNode = [];
            //left
            adjNode = [node[0], node[1] - 1];
            if (nodeIsTraversable(adjNode[0], adjNode[1]))
                queue.push(adjNode);
            //top
            adjNode = [node[0] - 1, node[1]];
            if (nodeIsTraversable(adjNode[0], adjNode[1]))
                queue.push(adjNode);
            //right
            adjNode = [node[0], node[1] + 1];
            if (nodeIsTraversable(adjNode[0], adjNode[1]))
                queue.push(adjNode);
            //bot
            adjNode = [node[0] + 1, node[1]];
            if (nodeIsTraversable(adjNode[0], adjNode[1]))
                queue.push(adjNode);
        }
    }
}

nodeIsTraversable = function (m, n) {
    return (m > -1 && n > -1 && m < this.grid.length && n < this.grid[0].length && this.grid[m][n] === "1" && !visited[m][n]);
}

const myGrid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
];

console.log("Number of Islands: " + numIslands(myGrid));