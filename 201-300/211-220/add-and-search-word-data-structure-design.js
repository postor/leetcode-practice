/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.dic = {}
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let ts = [this.dic]
  for (let i = 0; i < word.length; i++) {
    let toAdd = [word[i], '.'], newTs = []
    ts.forEach(obj => toAdd.forEach(char => {
      if (!obj[char]) obj[char] = {}
      newTs.push(obj[char])
    }))
    ts = newTs
  }
  ts.forEach(obj => obj[''] = true)
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  let t = this.dic
  for (let i = 0; i < word.length; i++) {
    if (!t[word[i]]) return false
    t = t[word[i]]
  }
  return !!t['']
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */