/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let rtn = new Array(people.length)
  people.sort((a, b) => a[0] - b[0] + (b[1] - a[1]) / people.length)
  people.forEach(p => {
    let [height, before] = p
    let i = 0
    while (true) {
      if (rtn[i]) {
        i++
        continue
      }
      if (before == 0) {
        rtn[i] = p
        break
      }
      before--
      i++
    }
  })
  return rtn
};

console.log(reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]).join('|'))