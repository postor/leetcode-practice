/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
  class W {
    constructor(arr = [], n = 0) {
      this.arr = arr
      this.sorted = arr.slice(0, n)
      this.nextIndex = n
      this.sorted.sort((a, b) => a - b)
    }

    getMedian() {
      let n = this.sorted.length
      if (n % 2) return this.sorted[(n - 1) / 2]
      return (this.sorted[n / 2 - 1] + this.sorted[n / 2]) / 2
    }

    step() {
      let toAdd = this.arr[this.nextIndex]
      let toRemove = this.arr[this.nextIndex - this.sorted.length]
      if (toAdd == toRemove) {
        this.nextIndex++
        return
      }
      this.remove(toRemove)
      this.add(toAdd)
      this.nextIndex++
    }

    remove(v = 0) {
      let i = this.findIndex(v)
      this.sorted.splice(i, 1)
    }

    add(v = 0) {
      let i = this.findIndex(v)
      this.sorted.splice(i, 0, v)
    }

    findIndex(v) {
      if (v > this.sorted[this.sorted.length - 1]) return this.sorted.length
      let left = 0, right = this.sorted.length - 1, arr = this.sorted
      return find(left, right)
      function find(l = 0, r = 0) {
        if (l == r) {
          if (v <= arr[l]) return l
          return l + 1
        }
        if (l + 1 == r) {
          if (v <= arr[l]) return l
          if (v <= arr[r]) return r
          return r + 1
        }
        let mid = Math.floor((l + r) / 2)
        if (v < arr[mid]) {
          return find(l, mid - 1)
        }
        return find(mid, r)
      }
    }
  }

  let w = new W(nums, k)
  let rtn = []
  rtn.push(w.getMedian())
  while (w.nextIndex != nums.length) {
    w.step()
    // console.log(w.sorted)
    rtn.push(w.getMedian())
  }
  return rtn
};

// console.log(medianSlidingWindow([6, 5, 9, 5, 4, 9, 1, 7, 5, 5]
//   , 4))