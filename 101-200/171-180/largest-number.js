/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
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

console.log(largestNumber([3, 30, 34, 5, 9]))
// console.log(largestNumber([0, 0]))


/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber1 = function (nums) {
  nums.sort((a, b) => {
    let as = a + '', bs = b + ''
    return parseFloat('0.' + bs + as) - parseFloat('0.' + as + bs)
  })
  let rtn = nums.join('').replace(/^0+/, '')
  if (!rtn) return '0'
  return rtn
};