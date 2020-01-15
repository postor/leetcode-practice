class Queue {
  constructor() {
    this.q = []
  }
  push(data) {
    this.q.push(data)
  }
  pop() {
    return this.q.shift()
  }
  size() {
    return this.q.length
  }
  isEmpty() {
    return this.size() === 0
  }
}

/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.store = new Queue
  this.tmp = new Queue

};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.store.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.store.isEmpty()) return
  while (this.store.size() > 1) {
    this.tmp.push(this.store.pop())
  }
  let rtn = this.store.pop()
  let t = this.store
  this.store = this.tmp
  this.tmp = t
  return rtn
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  let rtn = this.pop()
  this.store.push(rtn)
  return rtn
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.store.isEmpty()
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */