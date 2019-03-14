/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (!nums.length) return []
  let rtn = [], start = n = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == n + 1) {
      n++
      continue
    }

    //有跨越了
    push()
    start = n = nums[i]
  }
  push()
  return rtn

  function push() {

    if (start == n) {
      rtn.push(`${n}`)
    } else {
      rtn.push(`${start}->${n}`)
    }
  }
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]))