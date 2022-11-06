/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  if (!s.length) return []
  // suppose s="00110011"
  // then group=[["0",2],["1",2],["0",2],["1",2]]
  let group = getGroupArr()
  // cache['0'][1][1]=1 means '01' counts 1 
  let cache = { 0: [], 1: [] }

  let rtn = 0 // rtn updated in count function
  for (let i = 0; i < group.length - 1; i++) {
    rtn += count(group[i][0], group[i][1], group[i + 1][1])
  }
  return rtn

  function count(startChar, numa, numb) {
    let min = Math.min(numa, numb)
    if (min == 0) return 0
    let arr = cache[startChar]
    if (arr[min]) return arr[min]
    let tmp = 1
    // suppose '1100' startChar='1',numa=2,numb=2
    tmp += count(startChar, min - 1, min - 1) // check '10'
    arr[min] = tmp
    return tmp
  }

  function getGroupArr() {
    let group = [], cur = s[0], count = 1
    for (let i = 1; i < s.length; i++) {
      if (cur === s[i]) count += 1
      else {
        group.push([cur, count])
        cur = s[i]
        count = 1
      }
    }
    group.push([cur, count])
    return group
  }
};

// console.log(countBinarySubstrings("00110011"))