/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function () {
  this.dic = {}
  this.arr = []
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  let rtn = false
  if (!this.dic[val]) {
    this.dic[val] = []
    rtn = true
  }
  let i = this.arr.length
  this.arr[i] = val
  this.dic[val].push(i)
  return rtn
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  if (!this.dic[val] || !this.dic[val].length) return false
  let i = this.dic[val].pop()
  if (i < this.arr.length - 1) {
    this.arr[i] = this.arr[this.arr.length - 1]
    let ids = this.dic[this.arr[i]]
    for (let j = 0; j < ids.length; j++) {
      if (ids[j] == this.arr.length - 1) {
        ids[j] = i
      }
    }
  }
  this.arr.length = this.arr.length - 1
  return true
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  let rand = Math.floor(Math.random() * this.arr.length)
  return this.arr[rand]
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */