/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let MINCOUNT = Math.floor(nums.length / 3)
  let a, b, ca = 0, cb = 0
  for (let i = 0; i < nums.length; i++) {
    if ((ca == 0 && nums[i] !== b) || nums[i] == a) {
      a = nums[i]
      ca++
    } else if ((cb == 0 && nums[i] !== a) || nums[i] == b) {
      b = nums[i]
      cb++
    } else {
      ca--
      cb--
    }
  }
  ca = cb = 0
  for (let i = 0; i < nums.length; i++) {
    nums[i] == a && ca++
    nums[i] == b && cb++
  }
  let rtn = []
  if (ca > MINCOUNT) rtn.push(a)
  if (cb > MINCOUNT) rtn.push(b)
  return rtn
};

// console.log(majorityElement([0, 3, 4, 0]))
// console.log(majorityElement([1, 2]))
// console.log(majorityElement([6, 5, 5]))