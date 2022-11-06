/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
  this.trie = {}
  words.forEach((x, i) => {
    let t = this.trie
    for (let k1 = 0; k1 < x.length; k1++) {
      let k2 = x.length - 1 - k1
      let keys = k1 + k2
      if (!t[key]) t[key] = { '': [i] }
      else t[key][''].push(i)
    }
  })

  function addPS(obj, x, i, j, index) {
    if (j < 0) return
    let key = x[i] + x[j]
    obj[key] =
  }
  function addP(x, i) {

  }
};

/** 
 * @param {string} prefix 
 * @param {string} suffix
 * @return {number}
 */
WordFilter.prototype.f = function (prefix, suffix) {
  let cacheKey = prefix + '_' + suffix
  if (this.cache[cacheKey] !== undefined) return this.cache[cacheKey]
  this.cache[cacheKey] = this.fUncached(prefix, suffix)
  return this.cache[cacheKey]
};

WordFilter.prototype.fUncached = function (prefix, suffix) {
  let parr = trieTest(this.triePrefix, prefix),
    sset = new Set(trieTest(this.trieSuffix, suffix.split('').reverse()))
  parr.sort((a, b) => b - a)
  // if(prefix=='aba'&&suffix=='bbbbaa')debugger
  for (let i of parr) {
    if (sset.has(i)) return i
  }
  return -1
};



/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(prefix,suffix)
 */


