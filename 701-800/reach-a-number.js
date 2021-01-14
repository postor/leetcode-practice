/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
  // target>0 or <0 both the same result 
  // 1+2+....+step >= target
  // step*(step+1)/2 >= target 
  // => (step+0.5)^2 >= target*2+0.25
  // => step >= sqrt(target*2+0.25)-0.5
  let step = Math.ceil(Math.sqrt(Math.abs(target) * 2 + 0.25) - 0.5)
  while (true) {
    let sum = step * (step + 1) / 2
    let diff = sum - target
    if (diff % 2 == 0) return step // change diff/2 step to nagetive
    step++
  }
};

// console.log(reachNumber(3))
// console.log(reachNumber(2))
console.log(reachNumber(-1000000000))