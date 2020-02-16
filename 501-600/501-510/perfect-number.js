/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num < 2) return false
  let set = new Set(), smaller = 2, bigger = num
  while (smaller < bigger) {
    if (num % smaller) {
      smaller++
      continue
    }
    set.add(smaller)
    bigger = num / smaller
    set.add(bigger)
    smaller++
  }

  let sum = 1
  set.forEach(x => sum += x)
  return sum == num
};

// console.log(checkPerfectNumber(28))
// console.log(checkPerfectNumber(1))