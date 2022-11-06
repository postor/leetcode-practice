/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  //递减排序，从大的开始试
  candidates.sort((a, b) => b - a)
  let rtn = [], dic = {}
  tryNI()
  return rtn

  function tryNI(i = 0, arr = [], left = target) {
    if (left < 0) {
      return
    }
    if (left == 0) {
      let key = arr.join(',')
      if (dic[key]) {
        return
      }
      dic[key] = true
      rtn.push(arr)
      return
    }
    if (i >= candidates.length) {
      return
    }
    let numi = candidates[i], tmpArr = arr.concat(), curLeft = left
    for (let j = 0; j <= Math.floor(target / numi) && j <= 1; j++) {
      tryNI(i + 1, tmpArr, curLeft)
      tmpArr = tmpArr.concat([numi])
      curLeft -= numi
    }
  }
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8).join('\n'))