/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let counter = countPCached(), used = []
  return decide()
  function decide(leftN = n, leftK = k, cur = '') {
    if (leftN == 1) {
      for (let j = 1; j <= n; j++) {
        if (!used[j]) return cur + j
      }
    }

    let pcount = counter(leftN - 1), tk = leftK
    for (let j = 1; j <= n; j++) {
      //已经使用过这个字符了
      if (used[j]) continue
      //需要跳过这个字符
      if (tk > pcount) {
        tk -= pcount
        continue
      }
      //不能跳过
      used[j] = true
      return decide(leftN - 1, tk, cur + j)
    }
  }

  function countPCached() {
    let cache = [], c = 1
    for (i = 1; i < n; i++) {
      c = c * i
      cache[i - 1] = c
    }

    return (n) => cache[n - 1]
  }
};

console.log(getPermutation(3, 3))