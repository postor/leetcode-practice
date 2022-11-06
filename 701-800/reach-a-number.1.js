/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
  let pos = new Set([0]), absTarget = Math.abs(target)
  for (let steps = 1; ; steps++) {
    let t = new Set()
    for (let val of pos) {
      t.add(val + steps)
      t.add(Math.abs(val - steps))
    }
    if (t.has(absTarget)) return steps
    pos = t
  }
};

// console.log(reachNumber(3))
// console.log(reachNumber(2))
console.log(reachNumber(-1000000000))