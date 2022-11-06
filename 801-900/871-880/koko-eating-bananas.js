/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  if (!piles.length) return 0
  // -1 to make sure `l` for binsearch not include
  let avg = Math.ceil(piles.reduce((a, b) => a + b, 0) / h) - 1
  // max for `r` include
  let max = piles.reduce((a, b) => Math.max(a, b), 0)

  return binSearch(avg, max)

  function binSearch(l, r) {
    if (l + 1 === r) return r
    let mid = Math.floor((l + r) / 2)
    if (canItBe(mid)) {
      return binSearch(l, mid)
    } else {
      return binSearch(mid, r)
    }
  }

  function canItBe(x) {
    return piles.reduce((h, val) => h + Math.ceil(val / x), 0) <= h
  }
};

console.log(minEatingSpeed([3, 6, 7, 11], 8)) //4
console.log(minEatingSpeed([30,11,23,4,20], 5)) //30