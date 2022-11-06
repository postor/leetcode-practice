/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  return [...gen()]

  function* gen(prefix = 0) {
    if (prefix && prefix <= n) yield prefix
    if (prefix * 10 <= n) {
      for (let i = prefix ? 0 : 1; i < 10; i++) {
        yield* gen(prefix * 10 + i)
      }
    }
  }
};

console.log(lexicalOrder(13))