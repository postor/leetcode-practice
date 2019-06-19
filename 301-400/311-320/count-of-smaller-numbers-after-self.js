/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  class M {
    constructor() {
      this.stack = []
      this.totals = []
    }

    add(n) {
      if (!this.stack.length || this.stack[this.stack.length - 1] < n) {
        this.stack.push(n)
        this.totals.push(1)
        
      }

      
      function findI(start, end) {

      }

      function insert(i, n) {

        this.stack.splice(i, 0, n)
        this.totals.splice(i, 0, 1)
        for (let j = i; j < this.totals.length; j++) {
          this.totals[j]++
        }
      }
    }

  }

  let m = new M()
  let arr = new Array(nums.length)
  for (let i = nums.length - 1; i >= 0; i--) {
    arr[i] = m.add(nums[i])
  }
  return arr
};

// console.log(countSmaller([5, 2, 6, 1]))