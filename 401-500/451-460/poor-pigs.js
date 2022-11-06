/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
  let testCount = minutesToTest / minutesToDie
  let pigs = 0
  while (Math.pow(testCount + 1, pigs) < buckets) {
    pigs++
  }
  return pigs

};

// console.log(poorPigs(1000, 15, 60))
// console.log(poorPigs(4, 15, 15))