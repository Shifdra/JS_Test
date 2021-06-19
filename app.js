class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = { value: value, next: null };

        if (this.tail) {
            this.tail.next = newNode;
        }

        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }
    }

    prepend(value) {
        const newNode = { value: value, next: this.head };

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
    }

    insert() {

    }

    delete(value) {
        let currNode = this.head;
        while (currNode) {
            if (currNode === this.head && currNode.value === value) {
                //point head to the next node
                this.head = currNode.next;
            } else if (currNode.next !== null) {
                //current node is NOT the tail

                //delete & splice
                const nextNode = currNode.next;
                if (nextNode.value === value) {
                    currNode.next = nextNode.next;
                    //update tail
                    if (nextNode === this.tail)
                        this.tail = currNode;
                }
            }

            //update our cursor to the next node
            currNode = currNode.next;
        }
    }

    toArray() {
        const nodes = [];

        let currNode = this.head;
        while (currNode) {
            nodes.push(currNode);
            currNode = currNode.next;
        }

        return nodes;
    }
}


const ll = new LinkedList();
ll.append("head");
ll.append("head");
ll.append("hello world");
ll.append(0);
ll.append("head");
ll.append(false);
ll.append("tail");

ll.delete("tail");

console.log(ll.toArray());