/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    
  if (!wordList.includes(endWord)) return []
  let wordList1 = [beginWord, ...wordList]
  let table = getTable(wordList1)
  let endIndex = wordList1.indexOf(endWord)
  // 返回值
  let rtn = [], shortest = 0

  // bfs所需队列和标记
  let q = [[0, 1]], visited = [true]

  while (q.length) {
    // i表示节点，seqs表示到目前的节点组合
    let [i, len] = q.shift()

    // 可能继续的点
    for (let j = 0; j < table[i].length; j++) {
      // if (wordList1[i] == 'se' && wordList1[j] == 'sq') {
      //   console.log(1)
      // }
      if (i == j) continue
      let x = table[i][j]
      if (!x) continue // 不可走
      let len1 = len + 1
      if (visited[j]) continue  // 已经走过（其他更近的走法）

      // 到达终点
      if (j == endIndex) {
        return len1
      }
      visited[j] = true
      q.push([j, len1])
    }
  }

  return rtn.map(x => x.map(y => wordList1[y]))

  function countDiff(s1, s2) {
    let diff = 0
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] != s2[i]) diff++
    }
    return diff
  }

  function getTable(wordList1) {
    let t = wordList1.map((x, i) => wordList1.map((y, j) =>
      i > j ? false : countDiff(x, y) == 1));

    wordList1.forEach((x, i) => wordList1.forEach((y, j) =>
      i > j && (t[i][j] = t[j][i])));

    return t
  }
};



console.log(ladderLength("hit", "cog",
  ["hot", "dot", "dog", "lot", "log", "cog"]))