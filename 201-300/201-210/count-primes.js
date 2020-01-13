/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let dic = new Map()
  for (let i = 2; i < n; i++) {
    dic.set(i, i)
  }
  let sqrt = Math.floor(Math.sqrt(n - 1))
  for (let i = 2; i <= sqrt; i++) {
    for (let j = i; ; j++) {
      let v = i * j
      if (v >= n) break
      dic.delete(v)
    }
  }
  return dic.size
};

// console.log(countPrimes(10))