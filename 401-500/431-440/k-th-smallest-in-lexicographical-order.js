/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  let it = gen()
  for (let i = 0; i < k - 1; i++) {
    it.next()
  }
  return it.next().value

  function* gen(prifix = 0) {
    if (prifix && prifix <= n) yield prifix
    for (let i = prifix ? 0 : 1; i < 10; i++) {
      let v = prifix * 10 + i
      if (v > n) break
      yield* gen(v)
    }
  }
};

console.log(findKthNumber(13, 2))