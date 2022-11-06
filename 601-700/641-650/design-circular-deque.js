/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.arr = new Array(k).fill(0)
  this.front = 0
  this.back = -1
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false
  this.arr[this.getIndex(this.front)] = value
  this.front++
  return true
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false
  this.arr[this.getIndex(this.back)] = value
  this.back--
  return true
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false
  this.front--
  return true
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false
  this.back++
  return true
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1
  return this.arr[this.getIndex(this.front - 1)]
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1
  return this.arr[this.getIndex(this.back + 1)]
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.front === this.back + 1
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.front - this.back === this.arr.length + 1
};

MyCircularDeque.prototype.getIndex = function (i) {
  return ((i % this.arr.length) + this.arr.length) % this.arr.length
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */


// const ops = ["MyCircularDeque", "insertFront", "deleteLast", "getRear", "getFront", "getFront", "deleteFront", "insertFront", "insertLast", "insertFront", "getFront", "insertFront"]

// const params = [[4], [9], [], [], [], [], [], [6], [5], [9], [], [6]]
// const expects = [null, true, true, -1, -1, -1, false, true, true, true, 9, true]
// var obj = new MyCircularDeque(...params[0])
// for (let i = 1; i < ops.length; i++) {
//   let output = obj[ops[i]](...params[i])
//   if (output !== expects[i]) debugger
// }