/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function (N) {
  const perfectDic = new Array(N).fill(0).map(
    (x, i) => new Array(N).fill(0).map(
      (y, j) => isPerfect(i + 1, j + 1)))

  let total = 0
  permulate()
  return total


  function permulate(usedMask = 0, index = 0) {
    if (index == N) {
      total++
      return
    }
    for (let i = 0; i < N; i++) {
      let mask = 1 << i
      if (mask & usedMask) continue
      if (!perfectDic[index][i]) continue
      permulate(mask | usedMask, index + 1)
    }
  }


  function isPerfect(n, i) {
    if ((n % i) === 0) return true
    if ((i % n) === 0) return true
    return false
  }
};

// console.log(countArrangement(2))