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
  this.seq = 0
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (this.capacity == 0) return -1
  if (this.keyNodes[key]) {
    // this.removeNode(this.keyNodes[key])
    // this.addNode(this.keyNodes[key])
    const node = this.keyNodes[key]
    node.count++
    while (true) {
      let prev = node.prev
      let next = node.next
      if (prev === this.begin) break
      if (prev.count > node.count) break
      // if (prev.count == node.count) {
      //   if (prev.seq > node.seq) break
      // }
      prev.prev.next = node
      node.prev = prev.prev
      prev.next = next
      prev.prev = node
      next.prev = prev
      node.next = prev
    }
    return node.val
  }
  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity == 0) return
  if (this.keyNodes[key]) {
    // exist    
    // this.removeNode(this.keyNodes[key])
    // this.addNode(this.keyNodes[key])
    // this.keyNodes[key].val = value
    let node = this.keyNodes[key]
    node.val = value
    node.count += 1
    while (true) {
      let prev = node.prev
      let next = node.next
      if (prev === this.begin) break
      if (prev.count > node.count) break
      // if (prev.count == node.count) {
      //   if (prev.seq > node.seq) break
      // }
      prev.prev.next = node
      node.prev = prev.prev
      prev.next = next
      prev.prev = node
      next.prev = prev
      node.next = prev
    }
    return
  }

  let node = new Item(key, value, this.seq++)
  if (this.current < this.capacity) {
    this.keyNodes[key] = node
    this.addNode(this.keyNodes[key])
    this.current++
    return
  }

  // invalidate last one
  let toInvalidateNode = this.end.prev
  console.log(toInvalidateNode)
  // debugger;
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
  let n = this.end
  while (true) {
    if (n.prev == this.begin) break
    if (n.prev.count > 1) break
    n = n.prev
  }
  let p = n.prev
  p.next = node
  n.prev = node
  node.next = n
  node.prev = p
}


function Item(key = '', val = '', seq = 1) {
  this.val = val
  this.key = key
  this.count = 1
  this.seq = seq
  this.prev = null
  this.next = null
}


/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// let cache = new LFUCache(2 /* capacity */);

// cache.put(2, 2);
// cache.put(3, 3);
// console.log(3, cache.get(3));
// console.log(2, cache.get(2));
// cache.put(4, 4);
// console.log(2, cache.get(2));
// console.log(-1, cache.get(3));
// console.log(4, cache.get(4));       // returns 4

const input = [
  ["LFUCache", "put", "put", "put", "put", "put", "get", "put", "get", "get", "put", "get", "put", "put", "put", "get", "put", "get", "get", "get", "get", "put", "put", "get", "get", "get", "put", "put", "get", "put", "get", "put", "get", "get", "get", "put", "put", "put", "get", "put", "get", "get", "put", "put", "get", "put", "put", "put", "put", "get", "put", "put", "get", "put", "put", "get", "put", "put", "put", "put", "put", "get", "put", "put", "get", "put", "get", "get", "get", "put", "get", "get", "put", "put", "put", "put", "get", "put", "put", "put", "put", "get", "get", "get", "put", "put", "put", "get", "put", "put", "put", "get", "put", "put", "put", "get", "get", "get", "put", "put", "put", "put", "get", "put", "put", "put", "put", "put", "put", "put"],
  [[10], [10, 13], [3, 17], [6, 11], [10, 5], [9, 10], [13], [2, 19], [2], [3], [5, 25], [8], [9, 22], [5, 5], [1, 30], [11], [9, 12], [7], [5], [8], [9], [4, 30], [9, 3], [9], [10], [10], [6, 14], [3, 1], [3], [10, 11], [8], [2, 14], [1], [5], [4], [11, 4], [12, 24], [5, 18], [13], [7, 23], [8], [12], [3, 27], [2, 12], [5], [2, 9], [13, 4], [8, 18], [1, 7], [6], [9, 29], [8, 21], [5], [6, 30], [1, 12], [10], [4, 15], [7, 22], [11, 26], [8, 17], [9, 29], [5], [3, 4], [11, 30], [12], [4, 29], [3], [9], [6], [3, 4], [1], [10], [3, 29], [10, 28], [1, 20], [11, 13], [3], [3, 12], [3, 8], [10, 9], [3, 26], [8], [7], [5], [13, 17], [2, 27], [11, 15], [12], [9, 19], [2, 15], [3, 16], [1], [12, 17], [9, 1], [6, 19], [4], [5], [5], [8, 1], [11, 7], [5, 2], [9, 28], [1], [2, 2], [7, 4], [4, 22], [7, 24], [9, 26], [13, 28], [11, 26]],
  [null, null, null, null, null, null, -1, null, 19, 17, null, -1, null, null, null, -1, null, -1, 5, -1, 12, null, null, 3, 5, 5, null, null, 1, null, -1, null, 30, 5, 30, null, null, null, -1, null, -1, 24, null, null, 18, null, null, null, null, -1, null, null, 18, null, null, 11, null, null, null, null, null, 18, null, null, 24, null, 4, 29, -1, null, 12, 11, null, null, null, null, 29, null, null, null, null, 17, -1, 18, null, null, null, 24, null, null, null, 20, null, null, null, 29, 18, 18, null, null, null, null, 20, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, -1, null, 19, 17, null, -1, null, null, null, -1, null, -1, 5, -1, 12, null, null, 3, 5, 5, null, null, 1, null, -1, null, 30, 5, 30, null, null, null, -1, null, -1, 24, null, null, 18, null, null, null, null, 14, null, null, 18, null, null, 11, null, null, null, null, null, 18, null, null, -1, null, 4, 29, 30, null, 12, 11, null, null, null, null, 29, null, null, null, null, 17, -1, 18, null, null, null, -1, null, null, null, 20, null, null, null, 29, 18, 18, null, null, null, null, 20, null, null, null, null, null, null, null]
]

run(input)

function run([cmd = [], params = [], output = [], expected = []]) {
  let cache = new LFUCache(params[0][0]);
  for (let i = 1; i < cmd.length; i++) {
    // if (expected[i] != output[i]) debugger;
    const o = cache[cmd[i]].apply(cache, params[i])||null
    if(o!=expected[i]){ debugger;}
    console.log([cmd[i], params[i], o, expected[i]])
  }

}