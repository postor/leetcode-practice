/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
  let testCount = minutesToTest / minutesToDie
  let testWithXPigs = (x) => {
    let lastRound = Math.pow(2, x - 3)
    let otherRound = 1
    for (let y = 1; y > 2 - testCount; y -= 1) {
      otherRound *= (x + y)
    }
    return lastRound * otherRound
  }

  let p = testCount
  while (true) {
    if (testWithXPigs(p) >= buckets) return p
    p++
  }

};

console.log(poorPigs(1000, 15, 60))