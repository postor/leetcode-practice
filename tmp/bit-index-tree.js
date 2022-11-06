class DynamicSum {
  constructor(arr = []) {
    this.arr = arr
    this.bit = new Array(arr.length + 1).fill(0)
    arr.forEach((x,i)=>this.update(i, x))
  }

  /**
   * Returns the sum of the sub-array arr[0,...,x]
   * @param {*} x 
   */
  getSum(x) {
    let sum = 0, cur = x + 1
  }

  update(x, val) {
    let index = x + 1
    while (index <= this.arr.length) {
      this.bit[index] += val
    }
    index = index + (index & (-index))
  }
}