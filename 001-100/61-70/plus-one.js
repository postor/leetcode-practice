/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  if (!digits.length) return [1]
  let step = 1
  for (let i = digits.length - 1; i >= 0; i--) {
    let v = step + digits[i]
    if (v >= 10) {
      step = 1
      digits[i] = v % 10
      continue
    }
    digits[i] = v
    step = 0
    break
  }
  if (step) {
    digits.unshift(1)
  }
  return digits
};

console.log(plusOne([1, 2, 3]))
