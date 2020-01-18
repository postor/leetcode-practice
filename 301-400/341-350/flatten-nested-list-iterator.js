/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
  this.stack = [[nestedList, 0]]
  this._next = 0
  this._hasNext = false
  this.prepareNext()
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return this._hasNext
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  let rtn = this._next
  this.prepareNext()
  return rtn
};

NestedIterator.prototype.prepareNext = function () {
  while (this.stack.length) {
    let [nested, index] = this.stack[this.stack.length - 1]
    if (index >= nested.length) {
      // cur level list is empty, go upper level
      this.stack.pop()
      continue
    }
    let t = nested[index]
    if (t.isInteger()) {
      // move to next index
      this.stack[this.stack.length - 1][1]++
      this._next = t.getInteger()
      this._hasNext = true
      return
    }
    // still a list, drill deeper
    this.stack[this.stack.length - 1][1]++
    this.stack.push([t.getList(), 0])
    continue
  }
  // none left
  this._hasNext = false
}


/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/