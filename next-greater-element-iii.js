/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  let arr = num2arr(n)
  if (nextPermutation(arr)) {
    let i = arr2num(arr)
    if (i > Math.pow(2, 31)) {
      return -1
    }
    return i
  }
  return -1

  function arr2num(arr) {
    let c = 0
    for (let i = 0; i < arr.length; i++) {
      c *= 10
      c += arr[i]
    }
    return c
  }
  function num2arr(n) {
    let c = n, arr = []
    while (true) {
      let m = c % 10
      arr.unshift(m)
      c = (c - m) / 10
      if (c < 1) {
        break
      }
    }
    return arr
  }

  function nextPermutation(nums) {
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
          done = true
          break outer
        }
      }
      eater.push(n)
    }
    eater.sort((a, b) => a - b)
    eater.forEach(x => nums.push(x))
    return done
  };
};

console.log(nextGreaterElement(21))