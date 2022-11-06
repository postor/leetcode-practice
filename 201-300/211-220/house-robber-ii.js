/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) return 0
  if (nums.length == 1) return nums[0]
  if (nums.length < 4) return Math.max(...nums)
  let [n0, n1, n2] = nums
  let maxes1 = [n0, n1, n0 + n2] // 带第一家的
  let maxes2 = [0, n1, n2]  // 不带第一家的
  let maxes = [maxes1, maxes2]
  for (let i = 3; i < nums.length - 1; i++) {
    maxes.forEach(arr => {
      let ni3 = arr[i - 3]
      let ni2 = arr[i - 2]
      if (ni3 > ni2) {
        arr[i] = ni3 + nums[i]
      } else {
        arr[i] = ni2 + nums[i]
      }
    })
  }

  // 倒数第二家和倒数第三家的时候可能是最大
  let posibles = maxes.map(x => x[x.length - 1])
  posibles.push(maxes[0][nums.length - 3])
  // 最后一家，需要至少隔一个，而且不能使用了第一家的
  posibles.push(maxes[1][nums.length - 3] + nums[nums.length - 1])
  posibles.push(maxes[1][nums.length - 4] + nums[nums.length - 1])
  return Math.max(...posibles)
};

// console.log(rob([2, 7, 9, 3, 1]))
// console.log(rob([1, 3, 1, 3, 100]))