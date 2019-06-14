/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  if (nums.length < 2) return false
  if (k < 1) return false
  const FOUND = 0, END = 1, NOTFOUND = 2
  class W {
    constructor(l = 0, r = 0) {
      this.left = l
      this.right = r
    }

    step() {
      if (this.right - this.left < k) {
        this.right++
      } else {
        this.left++
        this.right++
      }
      if (this.right == nums.length) return END
      for (let i = this.right - 1; i >= this.left; i--) {
        if (Math.abs(nums[this.right] - nums[i]) <= t) {
          return FOUND
        }
      }
      return NOTFOUND
    }
  }
  let w = new W()
  while (true) {
    switch (w.step()) {
      case FOUND:
        return true
      case END:
        return false
    }
  }
};

// console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)) //true
// console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2)) //true
// console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3)) //false
// console.log(containsNearbyAlmostDuplicate([1, 3, 1], 1, 1)) //false
// console.log(containsNearbyAlmostDuplicate([1, 2], 0, 1)) //false
// console.log(containsNearbyAlmostDuplicate([2, 2], 3, 0)) //true