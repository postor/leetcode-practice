/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function (s, d) {
  // sort d with first [string lenth] and second [lexicographical ] order
  let groups = {}, cache = {}
  for (let str of d) {
    if (!groups[str.length]) groups[str.length] = {
      length: str.length,
      strs: []
    }
    groups[str.length].strs.push(str)
  }
  let groupArr = Object.keys(groups).map(k => groups[k])
  groupArr.sort((a, b) => b.length - a.length)
  for (let group of groupArr) {
    let { strs } = group
    strs.sort()
    for (let str of strs) {
      if (canMake(str)) return str
    }
  }
  return ''

  function canMake(str) {
    let lastIndex = 0
    for (let char of str) {
      let foundIndex = cachedIndexOf(char, lastIndex)
      if (foundIndex == -1) return false
      lastIndex = foundIndex + 1
    }
    return true
  }

  function cachedIndexOf(char, startIndex) {
    if (!cache[char]) cache[char] = {}
    if (cache[char][startIndex] !== undefined) return cache[char][startIndex]
    rtn = s.indexOf(char, startIndex)
    cache[char][startIndex] = rtn
    return rtn
  }
};

// console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]))