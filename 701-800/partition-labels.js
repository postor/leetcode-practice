/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  let dic = {}
  for (let i = 0; i < S.length; i++) {
    let char = S[i]
    if (!dic[char]) {
      dic[char] = [i, i]
    } else {
      dic[char][1] = i
    }
  }
  let ranges = new Array(S.length).fill('')
  for (let char in dic) {
    let toChange = new Set
    for (let i = dic[char][0]; i <= dic[char][1]; i++) {
      if (ranges[i] != '') toChange.add(ranges[i])
      ranges[i] = char
    }
    for (let i = 0; i < ranges.length; i++) {
      if (toChange.has(ranges[i])) ranges[i] = char
    }
  }
  let rtn = [], cur = ranges[0], count = 1
  for (let i = 1; i < ranges.length; i++) {
    if (ranges[i] == cur) {
      count++
      continue
    }
    rtn.push(count)
    count = 1
    cur = ranges[i]
  }
  rtn.push(count)
  return rtn
};