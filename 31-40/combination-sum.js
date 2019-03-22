/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  //递减排序，从大的开始试
  candidates.sort((a, b) => b - a)
  let rtn = []
  tryNI()
  return rtn

  function tryNI(i = 0, arr = [], left = target) {
    if (left < 0) {
      return
    }
    if (left == 0) {
      rtn.push(arr)
      return
    }
    if (i >= candidates.length) {
      return
    }
    let numi = candidates[i], tmpArr = arr.concat(), curLeft = left
    for (let j = 0; j <= Math.floor(target / numi); j++) {
      tryNI(i + 1, tmpArr, curLeft)
      tmpArr = tmpArr.concat([numi])
      curLeft -= numi
    }

  }
};

console.log(combinationSum([2, 3, 5], 8).join('\n'))