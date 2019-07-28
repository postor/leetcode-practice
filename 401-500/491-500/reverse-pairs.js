/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  if (nums.length < 2) return 0
  let total = 0, tree = {
    val: nums[nums.length - 1],
    val2: BigInt(nums[nums.length - 1]) * BigInt(2),
    count: 1
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    let x = nums[i]
    rCount(tree, x)
    rAdd(tree, x)
  }
  return total

  function rCount(n, x) {
    if (!n) return
    if (n.val2 < x) {
      total += n.count
      rCount(n.left, x)
      return
    }
    // >=x
    rCount(n.left, x)
  }

  function rAdd(n, x) {
    if (n.val == x) {
      n.count++
      return
    }
    if (n.val > x) {
      if (n.left) {
        rAdd(n.left, x)
        return
      }
      n.left = {
        val: x,
        val2: BigInt(x) * BigInt(2),
        count: 1
      }
      return
    }
    // <    
    n.count++
    if (n.right) {
      rAdd(n.right, x)
      return
    }
    n.right = {
      val: x,
      val2: x * 2,
      count: 1
    }
  }
};


// console.log(reversePairs([2147483647, 2147483647, -2147483647, -2147483647, -2147483647, 2147483647]))
// console.log(reversePairs([5, 4, 3, 2, 1]))