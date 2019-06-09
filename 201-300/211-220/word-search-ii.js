/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  let trie = getTrie(), rtn = []
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      tryWord(trie, i, j)
    }
  }
  return rtn

  function tryWord(dic, i, j, used = {}) {
    if (!dic) {
      return false
    }
    // 出界
    if (i < 0 || j < 0 || i >= board.length || j >= board[i].length) return false
    // 用过
    let key = `${i},${j}`
    if (used[key]) return false
    // 没有匹配
    let char = board[i][j]
    if (!dic[char]) return false

    // 结束
    if (dic[char]['']) {
      rtn.push(dic[char][''])
      //let only = Object.keys(dic[char]).length == 1
      trieRemoveWord(trie, dic[char][''])
      //if (!only) return true
    }
    // 匹配尝试继续
    tryWord(dic[char], i + 1, j, Object.assign({ [key]: true }, used))
    tryWord(dic[char], i, j + 1, Object.assign({ [key]: true }, used))
    tryWord(dic[char], i - 1, j, Object.assign({ [key]: true }, used))
    tryWord(dic[char], i, j - 1, Object.assign({ [key]: true }, used))
  }


  function trieRemoveWord(trie, word) {
    let t = trie, q = []
    for (let i = 0; i < word.length; i++) {
      q.push(t)
      t = t[word[i]]
    }
    delete t['']
    for (let i = word.length - 1; i > 0; i--) {
      if (Object.keys(q[i][word[i]]) == 0) {
        delete q[i][word[i]]
      }
    }
  }

  function getTrie(ws = words) {
    let dic = {}
    words.forEach(x => {
      let t = dic
      x.split('').forEach(char => {
        if (!t[char]) t[char] = {}
        t = t[char]
      })
      t[''] = x
    })
    return dic
  }
};

// console.log(findWords(
//   [
//     ['a', 'b']
//   ], ["ba"]))


// console.log(findWords(
//   [
//     ['o', 'a', 'a', 'n'],
//     ['e', 't', 'a', 'e'],
//     ['i', 'h', 'k', 'r'],
//     ['i', 'f', 'l', 'v']
//   ], ["oath", "pea", "eat", "rain"]))


// console.log(findWords(
//   [["a", "a", "a", "a"], ["a", "a", "a", "a"], ["a", "a", "a", "a"]],
//   ["aaaaaaaaaaaa", "aaaaaaaaaaaaa", "aaaaaaaaaaab"]
// ))

