/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return ''
  let prifix = '', i = 0
  while (true) {
    const {
      lengthOk,
      char,
      matchOk
    } = isSame(i)
    if (matchOk) {
      prifix += char
      i++
    } else {
      break
    }

  }
  return prifix

  function isSame(i) {
    let lengthOk = strs.every(x => x.length > i)
    let char = strs[0][i]
    let matchOk = lengthOk ? strs.every(x => x[i] === char) : false
    return {
      lengthOk,
      char,
      matchOk
    }
  }
};