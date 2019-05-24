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
  // 返回值
  let rtn = [], shortest = 0

  // bfs所需队列和标记
  let q = [[0, 1]], visited = [1], pathes = [[[0]]]

  while (q.length) {
    // i表示节点，seqs表示到目前的节点组合
    let [i, len] = q.shift()
    let seqs = pathes[i]
    // 已经超过长度
    if (shortest != 0 && len >= shortest) {
      break
    }

    // 可能继续的点
    for (let j = 0; j < table[i].length; j++) {
      // if (wordList1[i] == 'se' && wordList1[j] == 'sq') {
      //   console.log(1)
      // }
      if (i == j) continue
      let x = table[i][j]
      if (!x) continue // 不可走
      let len1 = len + 1
      if (visited[j] < len1) continue  // 已经走过（其他更近的走法）

      let t = seqs.map(x => x.concat(j))
      // 到达终点
      if (j == endIndex) {
//         console.log(`rtn! ${wordList1[i]},${wordList1[j]}:
// ${t.map(x => '  ' + x.map(y => wordList1[y])).join('\n')}`)
        // 第一个可行方案
        if (shortest == 0) {
          shortest = len1
        }
        // 所有可行方案
        rtn = rtn.concat(t)
      }

      // 前面有填过相同的点，直接补充
      if (visited[j] == len1) {
        pathes[j] = t.concat(pathes[j])
        q = q.filter(x => x[0] != j)
      } else {
        pathes[j] = t
      }
//       console.log(`${wordList1[i]},${wordList1[j]}:
// ${pathes[j].map(x => '  ' + x.map(y => wordList1[y])).join('\n')}`)
      // 记录这个点的路径
      visited[j] = len1
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



console.time()
console.log(findLadders(
  "qa",
  "sq",
  ["si", "go", "se", "cm", "so", "ph", "mt", "db", "mb", "sb", "kr", "ln", "tm", "le", "av", "sm", "ar", "ci", "ca", "br", "ti", "ba", "to", "ra", "fa", "yo", "ow", "sn", "ya", "cr", "po", "fe", "ho", "ma", "re", "or", "rn", "au", "ur", "rh", "sr", "tc", "lt", "lo", "as", "fr", "nb", "yb", "if", "pb", "ge", "th", "pm", "rb", "sh", "co", "ga", "li", "ha", "hz", "no", "bi", "di", "hi", "qa", "pi", "os", "uh", "wm", "an", "me", "mo", "na", "la", "st", "er", "sc", "ne", "mn", "mi", "am", "ex", "pt", "io", "be", "fm", "ta", "tb", "ni", "mr", "pa", "he", "lr", "sq", "ye"]
).join('\n'))
console.timeEnd()