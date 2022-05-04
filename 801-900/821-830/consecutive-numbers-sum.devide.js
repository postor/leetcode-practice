/**
 * @param {number} n
 * @return {number}
 */
var consecutiveNumbersSum = function (n) {
  // too long to execute
  let rtn = 1
  for (let i = 2; i < n / 2 + 1; i++) {
    let x = Math.floor(n / i)
    if (i % 2 === 1) {
      // odd
      if (x * i === n) {
        // x is int
        if (x - ((i - 1) / 2) > 0) {
          // and first positive 
          rtn++
        }
      }
    } else {
      // even
      if ((x + x + 1) * i / 2 === n) {
        // x is the middle left int (like 2,<3>,4,5)
        if (x - (i / 2 - 1) > 0) {
          rtn++
        }
      }
    }
  }
  return rtn
};

console.log(consecutiveNumbersSum(3)) //2

console.log(consecutiveNumbersSum(5)) //2
console.log(consecutiveNumbersSum(9)) //3
console.log(consecutiveNumbersSum(15)) //4