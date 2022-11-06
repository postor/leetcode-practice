/**
 * @param {number} num
 * @return {number}
 */
var findIntegers = function (num) {
  if (num < 2) return num + 1

  //             root  
  //          /       \      
  //         0         1
  //      /    \     /     \
  //     00    01    10     11
  //    / \   / \     / \     \
  // 000 001 010 011 100 101   111
  // 000 001 010     100 101

  // total means all count all on the left and num itself
  // fist we use dp to get the count of each depth/length with 0/1 starting bit, see getDPTable function

  // total(101) = top(10,depth=1) + count(100,depth=0) + count(101,depth=0) // topNode + leftNode + self
  //            = top(10,depth=1) + 1 + 1 // left and self are both 1
  //            = top(1,depth=2) + 1 + 1  // top has no left
  //            = count(0,depth=2) + 2
  //            = 3 + 2  

  // total(111) = top(11,depth=1) + count(110,depth=0) + count(111,depth=0) 
  //            = top(11,depth=1) + 0 + 0  // 110 and 111 are invalid
  //            = top(1,depth=2) + count(10,depth=1) // top and left
  //            = top(1,depth=2) + 2 // left is 2, 100 and 101
  //            = count(0,depth=2) + 2 // 1 has only left, no top
  //            = 3 + 2  

  let dps = getDPTable()

  return top(num, 0) // top 
    + count(num, 0) // count self
    + ((num & 1) ? count(num - 1, 0) : 0) // if has left, count left

  function top(num, depth) {
    if (!num) {
      return count(0, depth)
    }
    let endBit = num & 1
    let parent = num >> 1
    let leftCount = 0, topCount = 0
    if (endBit && depth > 0) {
      // this is right child and count left
      leftCount = count(num - 1, depth)
    }
    if (parent) {
      topCount = top(parent, depth + 1)
    }
    // console.log({
    //   num,
    //   depth,
    //   leftCount,
    //   topCount
    // })
    return leftCount + topCount
  }

  function count(num, depth = 0) {
    if (!isValidNum(num)) {
      return 0
    }
    let endBit = num & 1
    return dps[endBit][depth]
  }

  function isValidNum(num) {
    let t = num, endBit = num & 1
    while (t) {
      t = t >> 1
      if (endBit && t & 1) return false
      endBit = t & 1
    }
    return true
  }

  function getDPTable() {
    let dp = [
      [1], // dps[0][i] = count of nums with len i+1 start with 0, eg: i=1, dps[0][i]=2, [00,01]
      [1]  // dps[1][i] = count of nums with len i+1 start with 1, eg: i=1, dps[0][i]=1, [10]
    ]
    let ex2 = 2
    for (let i = 1; ex2 < num + 1; i++) {
      ex2 *= 2
      dp[0][i] = dp[0][i - 1] + dp[1][i - 1]
      dp[1][i] = dp[0][i - 1]
    }
    return dp
  }

};

// new Array(10).fill(0).forEach((x, i) => {
//   console.log(i + 1 + '=>' + findIntegers(i + 1))
// })

// // console.log(findIntegers(6))
// console.time()
// console.log(findIntegers(997289222))
// console.timeEnd()
