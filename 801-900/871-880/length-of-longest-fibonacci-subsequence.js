/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  // dic[current][prev]=count
  let max = 0, dic = new Map()
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i], curMap = new Map
    dic.set(val, curMap)
    for (let j = 0; j < i; j++) {
      let prev = arr[j]
      let pp = val - prev
      if (dic.has(prev) && dic.get(prev).has(pp)) {
        let prevMap = dic.get(prev)
        let cnt = prevMap.get(pp) + 1
        max = Math.max(cnt, max)
        prevMap.delete(pp)
        curMap.set(prev, cnt)
      } else {
        curMap.set(prev, 2)
      }
    }
  }
  return max >= 3 ? max : 0
};

console.log(lenLongestFibSubseq([1, 2, 3, 4, 5, 6, 7, 8])) // 5