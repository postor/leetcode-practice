/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  if (!nums.length) throw ''
  let second = { val: nums[0] }
  for (let i = 1; i < nums.length; i++) {
    let n = nums[i]
    if (n == second.val) continue
    if (n > second.val) {
      if (!second.prev) {
        second.prev = {
          next: second,
          val: n
        }
        continue
      }
      const first = second.prev
      if (first.val == n) continue
      if (n > first.val) {
        second = first
        second.prev = {
          next: second,
          val: n
        }
        continue
      }
      let node = {
        val: n,
        prev: first,
        next: second
      }
      first.next = node
      second.prev = node
      second = node
      continue
    }
    //n<seconde.val
    if (!second.next) {
      second.next = {
        val: n,
        prev: second
      }
      if (!second.prev) {
        second = second.next
      }
      continue
    }
    let third = second.next
    if (third.val >= n) continue
    second.next = {
      val: n,
      prev: second
    }
    if (!second.prev) {
      second = second.next
    }
  }

  if (second.next) return second.next.val
  if (second.prev) return second.prev.val
  return second.val
};

// console.log(thirdMax([3, 2, 1]))