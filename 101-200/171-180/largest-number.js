/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  // just find who has the bigger digits at the beginning
  nums.sort((a, b) => {
    let as = a + '', bs = b + ''
    let an = a * Math.pow(10, bs.length) + b
    let bn = b * Math.pow(10, as.length) + a
    return (bn - an) / Math.pow(10, as.length + bs.length)
  })
  let rtn = nums.join('').replace(/^0+/, '')
  if (!rtn) return '0'
  return rtn
};

// console.log(largestNumber([3, 30, 34, 5, 9]))
// console.log(largestNumber([0, 0]))
