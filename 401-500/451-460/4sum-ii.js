/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  let dic1 = getDic(A, B)
  let dic2 = getDic(C, D)

  let count = 0

  Object.keys(dic1).forEach(k => {
    let [v, c1] = dic1[k]
    if (dic2[-v]) count += c1 * dic2[-v][1]
  })
  return count

  function getDic(arr1 = [], arr2 = []) {
    let dic = {}
    arr1.forEach((x, i) => arr2.forEach((y, j) => {
      let v = x + y
      if (dic[v]) {
        dic[v][1]++
      } else {
        dic[v] = [v, 1]
      }
    }))
    return dic
  }
};

console.log(fourSumCount([-1,-1],
  [-1,1],
  [-1,1],
  [1,-1]))