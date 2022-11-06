class Stack {
  constructor() {
    this.s = []
  }
  push(x) {
    this.s.push(x)
  }
  pop() {
    return this.s.pop()
  }
  size() {
    return this.s.length
  }
  isEmpty() {
    return this.size() === 0
  }
}


/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.store = new Stack()
  this.tmp = new Stack()
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.store.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.store.isEmpty()) return
  while (this.store.size() > 1) {
    this.tmp.push(this.store.pop())
  }
  let rtn = this.store.pop()
  while(this.tmp.size()){
    this.store.push(this.tmp.pop())
  }
  return rtn
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.store.isEmpty()) return
  while (this.store.size() > 1) {
    this.tmp.push(this.store.pop())
  }
  let rtn = this.store.pop()
  this.store.push(rtn)
  while(this.tmp.size()){
    this.store.push(this.tmp.pop())
  }
  return rtn
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.store.isEmpty()
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// var obj = new MyQueue()
// obj.push(1)
// obj.push(2)
// console.log(obj.peek())
// console.log(obj.pop())
// console.log(obj.empty())