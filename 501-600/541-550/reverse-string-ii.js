/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let arr = s.split('')
  for (let i = 0; i < s.length; i += 2 * k) {
    reverse(i, i + k - 1)
  }

  return arr.join('')

  function reverse(start, end) {
    for (let i = start, j = Math.min(end, s.length - 1); i < j; i++ , j--) {
      let t = arr[i]
      arr[i] = arr[j]
      arr[j] = t
    }
  }
};