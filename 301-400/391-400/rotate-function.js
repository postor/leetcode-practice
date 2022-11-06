/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function (A) {
  if (!A.length) return 0
  let max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < A.length; i++) {
    let sum = 0
    for (let multi = 1; multi < A.length; multi++) {
      sum += A[(i + multi) % A.length] * multi
    }
    // console.log({sum})
    max = Math.max(sum, max)
  }
  return max
};

console.log(maxRotateFunction([-2147483648, -2147483648]))