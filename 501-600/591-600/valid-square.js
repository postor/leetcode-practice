/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
  // 4 points, make 6 lines, 4 sides equal, 2 cross equal
  let dic = new Map(), arr = [p1, p2, p3, p4]
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let dis = distance2(arr[i], arr[j])
      // no 0 allowed
      if (dis === 0) return false
      dic.has(dis) ? dic.set(dis, dic.get(dis) + 1) : dic.set(dis, 1)
    }
  }
  // there has to be only 2 value, means 2 keys
  if (dic.size !== 2) return false
  // make sure one value has 4 and the other 2
  let dic2 = {}
  dic.forEach((v, k) => dic2[v] = k)
  if (!dic2[4]) return false
  // still a triangle might fit these conditions, use math x*x+y*y=z*z
  return dic2[4] * 2 === dic2[2]

  function distance2([x1, y1], [x2, y2]) {
    return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)
  }
};

// console.log(validSquare([0, 0]
//   , [1, 1]
//   , [1, 0]
//   , [0, 1]))