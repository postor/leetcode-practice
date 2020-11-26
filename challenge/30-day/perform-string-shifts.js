/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  let totalShiftLeft = 0
  for (let [direction, amount] of shift) {
    totalShiftLeft += direction ? -amount : amount
  }
  // while (totalShiftLeft < 0) { totalShiftLeft += s.length }
  totalShiftLeft = totalShiftLeft % s.length
  totalShiftLeft = (totalShiftLeft + s.length) % s.length
  let leftPart = s.substr(0, totalShiftLeft), rightPart = s.substr(totalShiftLeft)
  return rightPart + leftPart
};

// console.log(stringShift("xqgwkiqpif",
//   [[1, 4], [0, 7], [0, 8], [0, 7], [0, 6], [1, 3], [0, 1], [1, 7], [0, 5], [0, 6]]))