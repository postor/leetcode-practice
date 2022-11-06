/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  if (nums.length < 2) return false
  const END = -1, FOUND = 1, FLOW = -2
  let queue = []

  class W {
    constructor(left = 0, right = 0) {
      this.right = right
      this.left = left
    }

    move() {
      this.right++
      if (this.right == nums.length) return END
      for (let i = this.right - 1; i >= this.left; i--) {
        let abs = Math.abs(nums[this.right] - nums[i])
        if (abs <= k) {
          if (abs <= t) return FOUND
          continue
        }
        //超出k，尝试最后一次
        // if (i > 0) {
        //   if (Math.abs(nums[this.right] - nums[i - 1]) <= t) {
        //     return FOUND
        //   }
        // }
        // 超出k进入下一段
        queue.push(new W(i, this.right))
        return FLOW
      }
    }
  }
  queue.push(new W())

  while (queue.length) {
    let w = queue.shift()
    while (true) {
      switch (w.move()) {
        case FOUND:
          return true
        case END:
          return false
        case FLOW:
          break;
      }
    }
  }
};

// console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0))
// console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2))
// console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3))

console.log(containsNearbyAlmostDuplicate([1, 3, 1], 1, 1)) //false
console.log(containsNearbyAlmostDuplicate([1, 2], 0, 1)) //false
console.log(containsNearbyAlmostDuplicate([2, 2], 3, 0)) //true
console.log(containsNearbyAlmostDuplicate([7, 2, 8], 2, 1)) //true
