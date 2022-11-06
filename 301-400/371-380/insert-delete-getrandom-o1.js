/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.arr = []
  this.dic = {}
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.dic[val] !== undefined) return false
  this.dic[val] = this.arr.length
  this.arr[this.arr.length] = val
  return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.dic[val] === undefined) return false
  let vLast = this.arr.pop()
  if (vLast == val) {
    delete this.dic[val]
    return true
  }
  this.arr[this.dic[val]] = vLast
  this.dic[vLast] = this.dic[val]
  delete this.dic[val]
  return true
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.arr[Math.floor(Math.random() * this.arr.length)]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet()
var param_1 = obj.insert(0)
var param_2 = obj.remove(0)
obj.insert(-1)
obj.remove(0)
var param_3 = obj.getRandom()
