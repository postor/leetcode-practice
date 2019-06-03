/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.keys = []
  this.cache = {}
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache[key] !== undefined) {
    this.keys.splice(this.keys.indexOf(key), 1)
    this.keys.unshift(key)
    return this.cache[key]
  }
  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache[key] !== undefined) {
    this.keys.splice(this.keys.indexOf(key), 1)
    this.keys.unshift(key)
    this.cache[key] = value
    return
  }
  if (this.keys.length == this.capacity) {
    let del = this.keys.pop()
    delete this.cache[del]
  }
  this.keys.unshift(key)
  this.cache[key] = value
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */