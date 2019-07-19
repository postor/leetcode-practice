/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  let mins = []
  let maxes = []

  return nums.some(x => {
    if (!mins.length) {
      mins.push(x)
      maxes.push(undefined)
      return
    }
    for (let i = 0; i < mins.length; i++) {
      if (mins[i] < x) {
        if (maxes[i] !== undefined) {
          if (x < maxes[i]) return true
        }
        maxes[i] = x
      }
    }
    if (x < mins[mins.length - 1]) {
      mins.push(x)
      maxes.push(undefined)
    }
  })

};

console.log(find132pattern([1, 2, 3, 4]))
console.log(find132pattern([3, 1, 4, 2]))
console.log(find132pattern([-1, 3, 2, 0]))