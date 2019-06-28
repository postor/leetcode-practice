/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  let result

  for (let i = 1; i < 10; i++) {
    if (prifix(i)) return result
  }
  return -1

  function prifix(p) {
    // add 0
    let t = p, c = 1, t1, c1
    while (t <= n) {
      t1 = t
      c1 = c
      k -= 1
      if (k == 0) {
        result = t
        return true
      }
      t *= 10
      c *= 10
    }
    // add others    
    if (!t1) return
    while (c1 > 1) {
      let range = (n < t1 + c1) ? n - t1 : c1-1
      if (range >= k) {
        result = t1 + k
        return true
      }
      k -= range
      c1 /= 10
      t1 /=10
    }
  }
};


console.log(findKthNumber(1000, 14)) // 11
// console.log(findKthNumber(10, 3))
// console.log(findKthNumber(13, 2))

// let total = 1000
// new Array(1000).fill(0).forEach((x, i) => {
//   console.log((i+1)+'|'+findKthNumber(total, i + 1))
// })