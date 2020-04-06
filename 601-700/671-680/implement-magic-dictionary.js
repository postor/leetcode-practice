/**
 * Initialize your data structure here.
 */
var MagicDictionary = function () {
  this.trie = {}
};

/**
 * Build a dictionary through a list of words 
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dict) {
  for (let word of dict) {
    this.add(word)
  }
  return null
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (word) {
  // if (word === 'bb') debugger
  let rtn = this.searchGet(word, false)
  if (rtn === undefined) return false
  let [w, count, left] = rtn
  if (!left || count > 1) return true
  return false
};

MagicDictionary.prototype.add = function (word) {
  if (this.searchGet(word, true) !== undefined) {
    add(this.trie, 0, 2)
  } else {
    add(this.trie, 0, 1)
  }

  function add(t, index, count) {
    if (index === word.length) {
      t['0'] = [word, count]
      return
    }
    if (!t[word[index]]) t[word[index]] = {}
    add(t[word[index]], index + 1, count)
  }
}

MagicDictionary.prototype.searchGet = function (word = '', add = false) {
  return getMatch(this.trie, 1, 0)
  function getMatch(t, left, index) {
    if (index === word.length) {
      let found = t['0']
      if (found !== undefined) {
        if (add) found[1]++
        return found.concat([left])
      }
      return undefined
    }
    let char = word[index]
    if (t[char]) {
      let rtn = getMatch(t[char], left, index + 1)
      if (rtn !== undefined) return rtn
    }
    if (!left) return undefined
    for (let key of Object.keys(t)) {
      if (key === '0') continue
      let rtn = getMatch(t[key], left - 1, index + 1)
      if (rtn !== undefined) return rtn
    }
    return undefined
  }
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */

// const opts = ["MagicDictionary", "buildDict", "search", "search", "search", "search", "search", "search", "search", "search", "search", "search", "search", "search", "search", "search"]

//   , params = [[], [["a", "b", "ab", "abc"]], ["a"], ["b"], ["c"], ["d"], ["e"], ["f"], ["ab"], ["ba"], ["abc"], ["cba"], ["abb"], ["bb"], ["aa"], ["bbc"]]
//   , expects = [null, null, true, true, true, true, true, true, false, false, false, false, true, true, true, true]

// let obj = new MagicDictionary()
// for (let i = 1; i < opts.length; i++) {
//   let output = obj[opts[i]](...params[i])
//   if (output !== expects[i]) debugger
// }