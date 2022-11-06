/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.trim().split(/\s+/)

  for (let l = 0, r = arr.length - 1; l < r; l++ , r--) {
    let t = arr[l]
    arr[l] = arr[r]
    arr[r] = t
  }
  return arr.join(' ')
};