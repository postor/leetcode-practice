/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  if (!nums.length) return nums
  let order = nums.concat()
  order.sort((x, y) => x - y)
  let arr = [order[0]], last = order[0]
  for (let i = 1; i < order.length; i++) {
    if (order[i] == last) continue
    arr.push(order[i])
    last = order[i]
  }
  let totals = arr.map(x => 0)
  let results = nums.map(x => 0)
  for (let i = nums.length - 1; i >= 0; i--) {
    let n = nums[i]
    let arri = findI(n)
    for (let j = arri; j < arr.length; j++) {
      totals[j]++
    }
    if (arri == 0) {
      results[i] = 0
    } else {
      results[i] = totals[arri - 1]
    }
  }
  return results

  function findI(x, start = 0, end = arr.length - 1) {
    if (end - start < 2) {
      if (x == arr[start]) return start
      return end
    }
    let mid = Math.floor((start + end) / 2)
    if (x <= arr[mid]) return findI(x, start, mid)
    return findI(x, mid + 1, end)
  }
};

// console.log(countSmaller([5, 2, 6, 1]))
// console.log(countSmaller([-1, -2]))
// console.log(countSmaller([1, 9, 7, 8, 5]))