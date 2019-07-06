/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity
  this.current = 0
  this.begin = new Item()
  this.end = new Item()
  this.keyNodes = {}

  this.begin.next = this.end
  this.end.prev = this.begin
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if(this.capacity==0) return -1
  if (this.keyNodes[key]) {
    this.removeNode(this.keyNodes[key])
    this.addNode(this.keyNodes[key])
    return this.keyNodes[key].val
  }
  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if(this.capacity==0) return
  if (this.keyNodes[key]) {
    // exist    
    this.removeNode(this.keyNodes[key])
    this.addNode(this.keyNodes[key])
    this.keyNodes[key].val = value
    return
  }

  let node = new Item(key, value)
  if (this.current < this.capacity) {
    this.keyNodes[key] = node
    this.addNode(this.keyNodes[key])
    this.current++
    return
  }

  // invalidate last one
  let toInvalidateNode = this.end.prev
  this.removeNode(toInvalidateNode)
  delete this.keyNodes[toInvalidateNode.key]
  this.keyNodes[key] = node
  this.addNode(this.keyNodes[key])
};

/** 
 * @param {Item} node 
 * @return {void}
 */
LFUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next
  node.next.prev = node.prev
}

/** 
 * @param {Item} node 
 * @return {void}
 */
LFUCache.prototype.addNode = function (node) {
  node.prev = this.begin
  node.next = this.begin.next
  this.begin.next.prev = node
  this.begin.next = node
}


function Item(key = '', val = '') {
  this.val = val
  this.key = key
  this.prev = null
  this.next = null
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LFUCache(2 /* capacity */);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // returns 1
cache.put(3, 3);    // evicts key 2
console.log(cache.get(2));       // returns -1 (not found)
console.log(cache.get(3));       // returns 3.
cache.put(4, 4);    // evicts key 1.
console.log(cache.get(1));       // returns -1 (not found)
console.log(cache.get(3));       // returns 3
console.log(cache.get(4));       // returns 4