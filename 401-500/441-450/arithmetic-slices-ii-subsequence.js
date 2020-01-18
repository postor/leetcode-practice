
class Item {
  constructor(step, length) {
    this.step = step
    this.length = length
  }
}
class ExpectDic {
  constructor() {
    this.dic = {}
  }
  /**
   * 
   * @param {*} x
   * @return {Item[]} 
   */
  getExpects(x) {
    if (this.dic[x]) return this.dic[x]
    return []
  }
  addExpect(x, step, length) {
    if (!this.dic[x]) this.dic[x] = []
    this.dic[x].push(new Item(step, length))
  }
}

/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
  let total = 0, expectDic = new ExpectDic()

  A.forEach((x, i) => {
    expectDic.getExpects(x).forEach(it => {
      if (it.length > 1) {
        total += 1
      }
      expectDic.addExpect(x + it.step, it.step, it.length + 1)
    })
    for (let j = 0; j < i; j++) {
      let step = x - A[j]
      expectDic.addExpect(x + step, step, 2)
    }
  })

  return total

};

// console.log(numberOfArithmeticSlices([2, 4, 6, 8, 10]))