/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let w = new W()
  nums.forEach(x=>w.add(x))
  return Object.keys(w.cache)[0]

  function W() {
    this.cache = {}
    this.add = (n) => {
      this.cache[n] = (this.cache[n] || 0) + 1
      if (this.cache[n] == 3) delete this.cache[n]
    }
  }

};