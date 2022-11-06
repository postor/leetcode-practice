/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  if (n === 1) return 0
  let total = -1, t = n
  outer:
  while (true) {
    for (let i = 2; i <= t / 2; i++) {
      if (t % i === 0) {
        total += i
        t /= i
        continue outer
      }
    }
    total += t + 1
    break
  }
  return total
};

// console.log(minSteps(1))

// console.log(minSteps(3)) // copy paste paste
// console.log(minSteps(6)) // c p p c p
// console.log(minSteps(12)) // cppcpcp