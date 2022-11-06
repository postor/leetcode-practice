/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let eater = [], done = false
  outer:
  while (nums.length) {
    if (!eater.length) {
      eater.push(nums.pop())
      continue
    }
    //此处可在push时排序进行优化
    eater.sort((a, b) => a - b)
    let n = nums.pop()
    for (let j = 0; j < eater.length; j++) {
      if (n < eater[j]) {
        nums.push(eater[j])
        eater[j] = n
        break outer
      }
    }
    eater.push(n)
  }


  eater.sort((a, b) => a - b)
  eater.forEach(x => nums.push(x))
  return nums


};

console.log(nextPermutation([1, 5, 1]))
console.log(nextPermutation([1, 2, 3]))