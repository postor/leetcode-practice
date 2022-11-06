/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  this.andBits = 1024 - 1
  this.arr = new Array(1024)
  this.moveBits = 10
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  let hash = key & this.andBits, data = key >> 10
  if (this.arr[hash] === undefined) {
    this.arr[hash] = [data]
    return
  }
  if (this.arr[hash].includes(data)) return
  this.arr[hash].push(data)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  let hash = key & this.andBits, data = key >> 10
  if (this.arr[hash] === undefined) return
  for (let i = 0; i < this.arr[hash].length; i++) {
    if (data == this.arr[hash][i]) {
      this.arr[hash].splice(i, 1)
      return
    }
  }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  let hash = key & this.andBits, data = key >> 10
  if (this.arr[hash] === undefined) return false
  return this.arr[hash].includes(data)
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

// var obj = new MyHashSet()
// obj.add(1)
// obj.remove(2)
// var param_3 = obj.contains(1)