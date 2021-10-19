// ** QUEUES

// FIFO data structure
// FIRST IN FIRST OUT
// the first element added will be the first element out

// BIG O
// insertion O(1)
// removal O(1)

// ** array implementation
let q = [];
q.push("first");
q.push("second");
q.push("third");
// adding to end
q.shift(); // "first"
// removing from beginning
// using shift method will re-index all data -- not efficient w lots of data

q.unshift("first");
q.unshift("second");
// adding to beginning
q.pop();
// removing from end

// ** building our own queue from stratch

// ENQUEUE PSEUDOCODE
// function accepts a value
// create a new node using the value passed into function
// if there are no nodes in queue set this node to be first and last property in q
// otherwise set the next property on the current last to be that node & set the last property of the queue to be that node

// DEQUEUE PSEUDOCODE
// if no first property return null
// store 1st property in variable
// see if first is same as last (check if there is only 1 node)
// if so set the first & last to be null
// if there is more than 1 node, set first property to be next property of first
// decrement size by 1
// return value of node dequeued

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let q = new Queue();
q.enqueue("FIRST")
q.enqueue("SECOND")
q.enqueue("THIRD")
q.dequeue()