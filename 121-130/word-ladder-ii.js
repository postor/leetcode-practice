/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return []
  let wordList1 = [beginWord, ...wordList]
  let table = getTable(wordList1)

  let endIndex = wordList1.indexOf(endWord)
  let rtn = [], shortest = Number.MAX_SAFE_INTEGER

  r()
  return rtn

  function r(arr = [beginWord], cur = 0, u = [true]) {
    for (let i = 0; i < wordList1.length; i++) {
      if (u[i]) {
        continue
      }
      if (table[i][cur] == 1) {
        let t = arr.concat(wordList1[i])
        if (table[i][endIndex] == 0) { // 结束了
          // 找到更短的
          if (t.length < shortest) {
            shortest = t.length
            rtn = []
          }
          rtn.push(t)
          continue
        }
        // 不是最短的放弃
        if (t.length >= shortest) {
          continue
        }
        // 继续递归
        let u1 = u.concat()
        u1[i] = true
        r(t, i, u1)
      }
    }

  }

  function countDiff(s1, s2) {
    let diff = 0
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] != s2[i]) diff++
    }
    return diff
  }

  function getTable(wordList1) {
    let t = wordList1.map((x, i) => wordList1.map((y, j) =>
      i > j ? 0 : countDiff(x, y)));

    wordList1.forEach((x, i) => wordList1.forEach((y, j) =>
      i > j && (t[i][j] = t[j][i])));

    return t
  }
};


console.log(findLadders("hit", "cog",
  ["hot", "dot", "dog", "lot", "log", "cog"]).join('\n'))