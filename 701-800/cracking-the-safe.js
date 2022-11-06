/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var crackSafe = function (n, k) {
  // start with n zeros, each append cover a new pass
  let arr = new Array(n).fill(0),
    targetSize = Math.pow(k, n),
    covered = new Set
  tryNext()
  return arr.join('')

  function tryNext() {
    let pass = arr.slice(arr.length - n).join('')
    if (covered.has(pass)) return false
    covered.add(pass)
    if (covered.size == targetSize) return true
    for (let i = 0; i < k; i++) {
      arr.push(i)
      if (tryNext()) return true
      arr.pop()
    }
    covered.delete(pass)
    return false
  }
};
// console.log(crackSafe(3, 2))
// console.log(crackSafe(2, 2))
// console.log(crackSafe(4, 7))