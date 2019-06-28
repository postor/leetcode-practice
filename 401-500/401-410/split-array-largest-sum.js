/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  let sums = nums.map(x => x)
  for (let i = 1; i < nums.length; i++) {
    sums[i] = sums[i] + sums[i - 1]
  }

  let cache = {}
  return findMin(0, nums.length - 1, m)

  function findMin(from, to, devide) {
    if (devide == 1) return getRangeSum(from, to)
    let fromCache = getCache(from, to, devide)
    if (fromCache) return fromCache
    let min = Number.MAX_SAFE_INTEGER

    for (let i = from; i < to + 2 - devide; i++) {
      let largest = Math.max(getRangeSum(from, i), findMin(i + 1, to, devide - 1))
      min = Math.min(largest, min)
    }

    setCache(from, to, devide, min)
    return min
  }

  function setCache(from, to, devide, v) {
    if (!cache[from]) cache[from] = {}
    if (!cache[from][to]) cache[from][to] = {}
    cache[from][to][devide] = v
  }

  function getCache(from, to, devide) {
    if (!cache[from]) return false
    if (!cache[from][to]) return false
    return cache[from][to][devide]
  }

  function getRangeSum(from, to) {
    if (from == 0) return sums[to]
    return sums[to] - sums[from - 1]
  }
};

// console.log(splitArray([7, 2, 5, 10, 8], 2))