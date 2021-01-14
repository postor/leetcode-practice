/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
  let rtn = 0, cache = new Map
  for (let i = L; i <= R; i++) {
    let count = getBit1Count(i)
    rtn += memoIsPrime(count)
  }
  return rtn
  function getBit1Count(n) {
    let rtn = 0, t = n
    while (t > 0) {
      rtn += (t & 1) ? 1 : 0
      t = t >> 1
    }
    return rtn
  }
  function isPrime(n) {
    if (n == 1) return false
    for (let x = 2; x <= Math.floor(n / 2); x++) {
      if (n % x == 0) return false
    }
    return true
  }
  function memoIsPrime(n) {
    if (!cache.has(n)) cache.set(n, isPrime(n))
    return cache.get(n)
  }
};

console.log(countPrimeSetBits(842, 888))