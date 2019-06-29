/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  if (n < 10) return k
  // cdp means with any given prifix, the total count under this prifix, so I can skip some calculation
  let cdp = getCdp()
  // 1    10    100   1000
  //                  1001
  //                  ...
  //            101   1010
  //                  1011
  //            102
  //            ...
  //       11   110
  //       ...  ...
  // 2     20   200
  // ...   ...  ...
  // 9     ...  ...
  //       ...  ...
  //       99   ...    
  //            999


  // ...   ...  ...
  // let me explain cdp here, look 9-999 or (n)-(n)99 they 
  // (1)   (10) (100) ...  this is column count relation   
  // (1)   (11) (111) ...  this means a prifix with any n, with c columns 
  // so the value of cdp is 1,11,111,....

  // first judge in which area (one corner 1011=n, one corner 999)
  let [total, c] = countInFirstArea()
  if (total < k) {
    // in the lower corner
    return findBackWard(c - 1, n - k + 1)
  }
  // in the upper
  return findForward(c, k)


  /**
   * @returns {[Number,Number]} totol to uper cornent, column count
   */
  function countInFirstArea() {
    /**
     * t=1,10,1000... max one no bigger than n
     */ 
    let t = 1
    /**
     * c=0,1,2,3 how m
     */
    let c = 0
    // t=1000 c=3 
    while (t * 10 <= n) t *= 10, c += 1
    let lastCol = n - t + 1, total = lastCol
    for (let i = 0; i < c; i++) {
      lastCol = Math.ceil(lastCol / 10)
      total += lastCol
    }
    // total = 12+2+1+1 // 1000-1011=>12  100-101=>2 10=>1 1=>1
    return [total, c]
  }

  /**
   * find from first
   * @param {*} c 
   * @param {*} left 
   * @param {*} prifix 
   */
  function findForward(c, left, prifix = 0) {
    if (prifix) {
      if (left == 1) return prifix
      left -= 1
    }
    for (let i = prifix ? 0 : 1; i < 10; i++) {
      // skip if possible
      if (cdp[c] < left) {
        left -= cdp[c]
        continue
      }
      // cannot skip, recurse
      return findForward(c - 1, left, prifix * 10 + i)
    }
  }

  /**
   * find from last
   * @param {*} c 
   * @param {*} left 
   * @param {*} prifix 
   */
  function findBackWard(c, left, prifix = 0) {
    if (c < 0) {
      return prifix
    }
    for (let i = 9; i >= (prifix ? 0 : 1); i--) {
      // skip if possible
      if (cdp[c] < left) {
        left -= cdp[c]
        continue
      }
      // cannot skip, recurse
      return findBackWard(c - 1, left, prifix * 10 + i)
    }
    return prifix
  }

  function getCdp() {
    let dp = new Array(10)
    dp[0] = 1
    for (let i = 1; i < 10; i++) {
      dp[i] = 10 * dp[i - 1] + 1
    }
    return dp
  }
}

// console.log(findKthNumber(10000, 10))
// console.log(findKthNumber(13, 2)) //10
// console.log(findKthNumber(1011, 14)) // 11


// let total = 10000
// new Array(10).fill(0).forEach((x, i) => {
//   console.log((i + 1) + '|' + findKthNumber(total, i+1))
// })