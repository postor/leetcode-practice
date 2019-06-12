/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  let dp = nums.map(x => nums.map(y => Math.abs(x - y)))
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (dp[i][j] <= t) {
        if (check(i + 1, j - 1)) return true
      }
    }
  }
  return false

  function check(i, j) {
    for (let x = i; x < j; x++) {
      for (let y = x + 1; y <= j; y++) {
        if (dp[x][y] > k) return false
      }
    }
    return true
  }
};

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0))
console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2))
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3))