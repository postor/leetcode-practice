/**
 * Initialize your data structure here.
 */
var AllOne = function () {
  this.dicKV = {}
  this.dicVC = {}
  this.dicVNodes = {}
  this.dicKNodes = {}
  this.linkedListStart = { key: '' }
  this.linkedListEnd = { key: '' }
  this.linkedListStart.next = this.linkedListEnd
  this.linkedListEnd.prev = this.linkedListStart
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
  if (!this.dicKV[key]) {
    this.addNode(1, key)
    this.dicKV[key] = 1
    return
  }
  let currentValue = this.dicKV[key]
  let from = this.dicVNodes[currentValue]
  let node = this.dicKNodes[key]
  this.addNode(currentValue + 1, key, from)
  this.removeNode(currentValue, key, node)
  this.dicKV[key] = currentValue + 1
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
  let currentValue = this.dicKV[key]
  if (!currentValue) {
    return
  }
  let node = this.dicKNodes[key]
  if (currentValue == 1) {
    this.removeNode(1, key, node)
    delete this.dicKNodes[key]
    delete this.dicKV[key]
    return
  }

  let from = this.dicVNodes[currentValue]
  this.addNode(currentValue - 1, key, from)
  this.removeNode(currentValue, key, node)
  this.dicKV[key] = currentValue - 1
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
  return this.linkedListEnd.prev.key
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
  return this.linkedListStart.next.key
};

AllOne.prototype.addNode = function (val, key, from = null) {
  let node = { val, key }
  this.dicKNodes[key] = node
  if (!this.dicVC[val]) {
    this.dicVC[val] = 1
    this.dicVNodes[val] = { start: node, end: node }
    if (from == null) {
      let prev = this.linkedListStart
      let next = prev.next
      node.prev = prev
      node.next = next
      prev.next = node
      next.prev = node
    } else {
      let { start, end } = from
      if (start.val < val) {
        node.prev = end
        node.next = end.next
        end.next.prev = node
        end.next = node
      } else {
        node.prev = start.prev
        node.next = start
        start.prev.next = node
        start.prev = node
      }
    }

  } else {
    this.dicVC[val]++
    let start = this.dicVNodes[val].start
    start.prev.next = node
    node.prev = start.prev
    start.prev = node
    node.next = start
    this.dicVNodes[val].start = node
  }
};

AllOne.prototype.removeNode = function (val, key, node) {
  if (this.dicVC[val] == 0) return

  node.prev.next = node.next
  node.next.prev = node.prev
  this.dicVC[val]--

  if (this.dicVC[val] == 0) {
    delete this.dicVC[val]
    return
  }

  if (this.dicVNodes[val].start == node) {
    this.dicVNodes[val].start = node.next
  }
  if (this.dicVNodes[val].end == node) {
    this.dicVNodes[val].end = node.prev
  }
}


/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */

let a = ["inc", "inc", "inc", "inc", "getMaxKey", "inc", "inc", "inc", "dec", "inc", "inc", "inc", "getMaxKey"]
let b = [["hello"], ["goodbye"], ["hello"], ["hello"], [], ["leet"], ["code"], ["leet"], ["hello"], ["leet"], ["code"], ["code"], []]
var obj = new AllOne()
a.forEach((method, i) => {
  let rtn = obj[method](...b[i])
  print()
  console.log(JSON.stringify({ rtn, method, params: b[i] }))
  console.log('--')
})


print()
var param_3 = obj.getMaxKey()
var param_4 = obj.getMinKey()
console.log({ param_3, param_4 })

function print() {
  let start = obj.linkedListStart, end = obj.linkedListEnd
  let foward = start.next, backward = end.prev
  let farr = [], barr = []
  while (foward != end) {
    farr.push(foward)
    foward = foward.next
  }
  while (backward != start) {
    barr.push(backward)
    backward = backward.prev
  }
  console.log(farr.map(({ key, val }) => `${key}|${val}`).join('->'))
  // console.log(barr.map(({ key, val }) => `${key}|${val}`).join('->'))
}