// ** STACKS

// a LIFO data structure
//** LAST IN FIRST OUT 
// the last element added to the stack will be the first element removed from the stack

// ** array implementation 
let stack = [];
stack.push("google")
stack.push("youtube")
stack.pop()
// adding to end and removing from end

// unshift() && shift()
// adding to beginning and removing from beginning
// using these methods is bad big O notation (and not great with LOTS of data) -- having to shift all the indexes down add one to beginning
    // moving element from index 0 - to index 1, etc.



// ** building our own stack from stratch

// PUSHING PSEUDOCODE
// function should accept a value
// create a new node with that value
// if no nodes are in stack, set first and last property to newly created node
// if there is one node, create variable that stores the current 1st property in stack
// reset the first property to be newly created node
// set the next property on the node to be the previously created variable
// increment size of stack by 1
// return the size


// POP PSEUDOCODE
// if no nodes in stack return null
// create temp variable to store first property in stack
// if there is only 1 node, set first & last property to be null
// if more than 1 node, set first property to be next property on current first
// decrement the size by 1
// return value of node removed

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);
        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if (this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}


let stack = new Stack();
stack.push(12);
stack.push(333);
stack.push(797);
