/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function (n) {
  // memory overflow
  if (n < 3) return 1
  let sums = new Array(Math.ceil(n / 2) + 1)
  sums[0] = 0
  for (let i = 1; i < sums.length; i++) {
    sums[i] = sums[i - 1] + i
  }

  let start = 0, end = 1, rtn = 0
  while (end < sums.length) {
    let curSum = sums[end] - sums[start]
    if (curSum == n) {
      rtn++
      start++
    } else if (curSum > n) {
      start++
    } else {
      end++
    }
  }

  return rtn + 1
};

console.log(consecutiveNumbersSum(5)) //2
console.log(consecutiveNumbersSum(9)) //3
console.log(consecutiveNumbersSum(15)) //4