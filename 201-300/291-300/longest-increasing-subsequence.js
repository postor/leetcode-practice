/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums.length) return 0

  let dp = []
  nums.forEach(x => {
    let c = 1
    dp.forEach(({ max, count }) => {
      if (max < x) {
        c = Math.max(c, count + 1)
      }
    })
    dp = dp.filter(({ max, count }) => !(max >= x && count <= c))
    dp.push(new Item(x, c))
  })
  return Math.max(...(dp.map(({ count }) => count)))

  function Item(max, count = 1) {
    this.max = max
    this.count = count
    this.toDel = false
  }

};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))