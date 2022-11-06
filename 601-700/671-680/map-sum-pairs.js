/**
 * Initialize your data structure here.
 */
var MapSum = function () {
  this.trie = {}
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  let t = this.trie
  for (let char of key) {
    if (!t[char]) t[char] = {}
    t = t[char]
  }
  t['value'] = val
  return null
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let t = this.trie
  for (let char of prefix) {
    t = t[char]
    if (!t) return 0
  }
  return sum(t)
  function sum(obj) {
    let rtn = 0
    for (let k in obj) {
      if (k === 'value') rtn += obj[k]
      else rtn += sum(obj[k])
    }
    return rtn
  }
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

const opts = ["MapSum", "insert", "sum", "insert", "sum"]
  , params = [[], ["apple", 3], ["ap"], ["app", 2], ["ap"]]
  , expects = [null, null, 3, null, 5]

let obj = new MapSum()


for (let i = 1; i < opts.length; i++) {
  let output = obj[opts[i]](...params[i])
  if (output !== expects[i]) debugger
}