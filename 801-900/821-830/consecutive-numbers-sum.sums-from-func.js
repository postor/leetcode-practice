/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function (n) {
  // memory overflow
  if (n < 3) return 1
  if (n == 3) return 2
  let start = 0, end = 1, rtn = 0
  while (end < n / 2 + 2) {
    let curSum = sums(end) - sums(start)
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

  function sums(x) {
    return (1 + x) / 2 * x
  }
};

console.log(consecutiveNumbersSum(3)) //2
// console.log(consecutiveNumbersSum(5)) //2
// console.log(consecutiveNumbersSum(9)) //3
// console.log(consecutiveNumbersSum(15)) //4