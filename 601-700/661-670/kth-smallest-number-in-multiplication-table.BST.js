/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {
  return findInHalf(1, m * n)

  function findInHalf(l, r) {
    if (l === r) return l
    let mid = Math.floor((l + r) / 2)
    let [count, val] = getCount(mid)
    if (count === k) return val
    if (count < k) {
      return findInHalf(mid + 1, r)
    }
    return findInHalf(l, mid)

  }

  function getCount(max) {
    let val = 1, count = 0
    for (let x = 1; x <= m; x++) {
      let yMax = Math.min(Math.floor(max / x), n)
      count += yMax, val = Math.max(val, x * yMax)
    }
    return [count, val]
  }

};

// console.log(findKthNumber(9895
//   , 28405
//   , 100787757))
// console.log(findKthNumber(3, 3, 5),3)
// console.log(findKthNumber(2, 3, 6),6)