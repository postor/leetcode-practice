/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // consider nums as a linked list like [2,1,3,4,4] 
  // where value is array index and next is array value
  // 0->2->3->4->4 there must be circle inside, in this case circle is 4->4

  // two men with different speed will meet inside circle
  // suppose points A,B,C
  // A is where we start, in this case list head and array index 0 (known value)
  // B is where circle begin, the first 4 inside circle, array index 3 (we dont know yet)
  // C is where the two men meet (we know it after they match)

  // when the meet, faster man has gone twice the distance as slower man
  // distance(A,B)+distance(B,C)+distance(C,B)+distance(B,C)
  // = 2*(distance(A,B)+distance(B,C))
  // but we need only to know the point B, and we know C (where they meet)
  // so start from C, with distance(C,B) steps we find point B
  // with the formular above, we got distance(C,B) equals distance(A,B)
  // so we start from A to B and at the mean time start from C to B, they meet at point B
  // tricky: the faster might loop N times inside circle
  //         but it's the same result as you just consider it as one big circle

  let fast = nums[0], slow = nums[0]
  while (true) {
    fastStep()
    slowStep()
    console.log({ fast, slow })
    if (fast == slow) {
      // circle found! O(n) at most two loop in side circle
      let a = nums[0], b = fast
      while (true) {
        if (a == b) return a
        console.log({ a, b })
        a = nums[a]
        b = nums[b]
      }
    }
  }

  function fastStep() {
    fast = nums[fast]
    fast = nums[fast]
  }

  function slowStep() {
    slow = nums[slow]
  }

};

console.log(findDuplicate([3, 1, 3, 4, 2]))