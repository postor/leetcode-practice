/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  // 统计statistic
  let aCode = 'a'.charCodeAt(0)
  let counts = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    let j = s.charCodeAt(i) - aCode
    counts[j]++
  }
  // 按顺序排列，尝试切分
  let sortedCountsIndex = counts.map((x, i) => i).filter(i => counts[i])
  sortedCountsIndex.sort((x, y) => counts[x] - counts[y])

  // "cbacdcbc" = "cbac" + "d" + "cbc"

  function tryRemove(str = '', sortedCountsI = 0, cs = counts.concat()) {
    if (str.length < 2) return [[0, str]]
    let results = []
    let countsI = sortedCountsIndex[sortedCountsI]
    let char = String.fromCharCode(countsI + aCode)
    let parts = str.split(char) // cbac cbc
    cs[countsI] = 1
    for (let i = 0; i < parts.length - 1; i++) {
      let leftStr = parts.slice(0, i).join('')
      let rightStr = parts.slice(i + 1).join('')
      
    }

    return []
  }


};

console.log(removeDuplicateLetters("cbacdcbc"))