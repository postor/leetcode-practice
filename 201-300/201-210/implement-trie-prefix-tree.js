/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.dic = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let t = this.dic
  for (let i = 0; i < word.length; i++) {
    if (!t[word[i]]) t[word[i]] = {}
    t = t[word[i]]
  }
  t[''] = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let t = this.dic
  for (let i = 0; i < word.length; i++) {
    if (!t[word[i]]) return false
    t = t[word[i]]
  }
  if(!t['']) return false
  return true
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let t = this.dic
  for (let i = 0; i < prefix.length; i++) {
    if (!t[prefix[i]]) return false
    t = t[prefix[i]]
  }
  return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */