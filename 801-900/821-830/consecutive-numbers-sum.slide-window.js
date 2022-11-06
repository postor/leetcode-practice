/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function (n) {
  // too long to excute
  if (n < 3) return 1

  let start = 1, end = 1, curSum = 1, rtn = 0
  while (end < Math.ceil(n / 2) + 1) {
    if (curSum == n) {
      rtn++
      curSum -= start
      start++
    } else if (curSum > n) {
      curSum -= start
      start++
    } else {
      end++
      curSum += end
    }
  }

  return rtn + 1
};

console.log(consecutiveNumbersSum(5)) //2
console.log(consecutiveNumbersSum(9)) //3
console.log(consecutiveNumbersSum(15)) //4