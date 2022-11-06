/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
  const s = 'abcdefghijklmnopqrstuvwxyz'
  let expect = undefined, expectCount = 1, total = 0
    , index = 0, startIndex = 0, indexMap = new Map()

  for (let i = 0; i < p.length; i++) {
    let char = p[i]
    if (expect === char) {
      expectCount++
      index++
      for (let i = startIndex; i < startIndex + expectCount; i++) {
        addCount(i % s.length, expectCount - i + startIndex)
      }
    } else {
      expectCount = 1
      index = s.indexOf(char)
      startIndex = index
      addCount(startIndex % s.length, expectCount)
    }
    expect = s[(index + 1) % s.length]
  }
  return total

  function addCount(start, length) {
    if (!indexMap.has(start) || indexMap.get(start) < length) {
      total += 1
      indexMap.set(start, length)
    }
  }
};

// console.log(findSubstringInWraproundString('a'))
// console.log(findSubstringInWraproundString('cac'))
// console.log(findSubstringInWraproundString('zab'))

// console.log(findSubstringInWraproundString("cdefghefghijklmnopqrstuvwxmnijklmnopqrstuvbcdefghijklmnopqrstuvwabcddefghijklfghijklmabcdefghijklmnopqrstuvwxymnopqrstuvwxyz"))
