topKFrequent = function (nums, k) {
    const output = [];
    const counts = {};

    //count the unique values found in the input
    let biggest = 0;
    for (num of nums) {
        if (counts[num])
            counts[num] += 1;
        else 
            counts[num] = 1;
            
        if (counts[num] > biggest) {
            biggest = counts[num];
            output.push(num);
        }
    }

    //get the 2 largest numbers
    return [output[output.length - 1], output[output.length - 2]];
};

console.log(topKFrequent([1, 1, 1, 1, 2, 2, 3], 2));