/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let xor = 0, diff = 1
  nums.forEach(x => xor ^= x)
  while (!(xor & diff)) {
    diff = diff << 1
  }
  let x = 0, y = 0
  nums.forEach(z => {
    if (z & diff) x ^= z
    else y ^= z
  })
  return [x, y]
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]))
