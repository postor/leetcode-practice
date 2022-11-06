/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const MAX = 1690
  let dp = [undefined, true]
  const factors = [2, 3, 5]

  let it = gen()
  for (let i = 0; i < n - 1; i++) it.next()
  return it.next().value

  function* gen() {
    let last = 0
    for (let e = 0; ; e++) {
      let e2 = Math.pow(2, e)
      if (e2 > MAX) break
      for (let i = last; i < e2; i++) {
        if (dp[i]) yield i
      }
      last = e2
      for (let i = e2;
        i <= Math.pow(5, e) && i < dp.length;
        i++) {
        factors.forEach(x => {
          if (dp[i]) dp[i * x] = true
        })
      }
    }
    for (let i = last; i <= MAX; i++) {
      if (dp[i]) yield i
    }
  }
};

console.time()
console.log(nthUglyNumber(95))
console.timeEnd()