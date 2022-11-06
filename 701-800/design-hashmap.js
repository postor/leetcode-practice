class HashData {
  /**
   * 
   * @param {number} highBits 
   * @param {number} value 
   */
  constructor(highBits, value) {
    this.highBits = highBits
    this.value = value
  }
}


/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
  this.andBits = 1024 - 1
  /**
   * @type {HashData[]}
   */
  this.arr = new Array(1024)
  this.moveBits = 10

};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  let hash = key & this.andBits, data = key >> 10
  if (this.arr[hash] === undefined) {
    this.arr[hash] = [new HashData(data, value)]
    return
  }
  for (let i = 0; i < this.arr[hash].length; i++) {
    if (this.arr[hash][i].highBits == data) {
      this.arr[hash][i].value = value
      return
    }
  }
  this.arr[hash].push(new HashData(data, value))
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  let hash = key & this.andBits, data = key >> 10
  if (this.arr[hash] === undefined) return -1
  for (let i = 0; i < this.arr[hash].length; i++) {
    if (this.arr[hash][i].highBits == data) {
      return this.arr[hash][i].value
    }
  }
  return -1
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  let hash = key & this.andBits, data = key >> 10
  if (this.arr[hash] === undefined) return 
  for (let i = 0; i < this.arr[hash].length; i++) {
    if (this.arr[hash][i].highBits == data) {
      return this.arr[hash].splice(i,1)
    }
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */