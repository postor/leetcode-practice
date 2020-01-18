/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  let trie = {}
  // for example nums=[2,3] 2=0b10,3=0b11
  // trie
  //     [0] = undefined
  //     [1] [0] = 2
  //     [1] [1] = 3
  // it's depth is 31
  //     [true] [true] = {} if correct

  nums.forEach(x => {
    let t = trie
    let curBit = 1 << 30
    while (curBit) {
      let has = !!(curBit & x)
      if (!t[has]) t[has] = {}
      t = t[has]
      curBit >>= 1
    }
  })

  // then find the max
  let maxDic = {}
  nums.forEach(x => {
    // n loop
    let t = trie, curBit = 1 << 30, curXor = 0

    while (curBit && t) {
      // 31 loop
      let has = !!(curBit & x)
      let curXorBit = t[!has] ? curBit : 0
      curXor |= curXorBit
      if (maxDic[curBit] === undefined) {
        maxDic[curBit] = curXor
      } else {
        // early give up
        if (maxDic[curBit] > curXor) return
        maxDic[curBit] = curXor
      }
      t = curXorBit ? t[!has] : t[has]
      curBit >>= 1
    }
  })
  return maxDic[1]
};

// console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]))