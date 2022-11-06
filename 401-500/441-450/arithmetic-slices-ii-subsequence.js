
class ExpectDic {
  constructor() {
    // key = nums start a subseq
    this.dic1 = new Map()
    // key = nums expected
    this.dicExpect = new Map()
  }

  addVal(x) {
    const { dic1 } = this
    let expected = this.getExpects(x)
    let toAdd = [], seqCounter = 0
    expected.forEach((count, step) => {
      // once expected, count seqs and push new expects. eg: addVal(6) after add 2 and 4, 6 is prepared when addVal(4)
      toAdd.push([x + step, step, count])
      seqCounter += count
    })
    dic1.forEach((count, val) => {
      // every added number, might be a start
      let step = x - val
      toAdd.push([x + step, step, count])
    })
    toAdd.forEach(([x, step, count]) => {
      this.addExpect(x, step, count)
    })
    // add to dic
    if (!dic1.has(x)) {
      dic1.set(x, 1)
    } else {
      dic1.set(x, dic1.get(x) + 1)
    }
    return seqCounter
  }

  /**
   * get expected details of expected number
   * @param {*} x the expected number
   * @return {Map} rtn key=step, val=count  
   */
  getExpects(x) {
    if (this.dicExpect.has(x)) {
      return this.dicExpect.get(x)
    }
    return new Map()
  }

  /**
   * add an expected number 
   * @param {*} x 
   * @param {*} step 
   * @param {*} count 
   */
  addExpect(x, step, count) {
    const dic = this.dicExpect
    if (!dic.has(x)) {
      const map = new Map()
      map.set(step, count)
      dic.set(x, map)
    } else {
      const map = dic.get(x)
      const curCount = map.has(step) ? map.get(step) : 0
      map.set(step, count + curCount)
    }
  }
}

/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
  let total = 0, expectDic = new ExpectDic()
  A.forEach((x, i) => {
    let curCount = expectDic.addVal(x)
    total += curCount
  })
  return total
};

// console.log(numberOfArithmeticSlices([2, 4, 6, 8, 10]))
// console.log(numberOfArithmeticSlices([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]))