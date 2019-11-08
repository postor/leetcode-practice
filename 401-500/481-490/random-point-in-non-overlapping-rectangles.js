/**
 * @param {number[][]} rects
 */
var Solution = function (rects) {
  this.rects = rects
  this.total = 0
  this.ranges = []
  this.areas = rects.map(([x1, y1, x2, y2]) => {
    let area = (x2 - x1 + 1) * (y2 - y1 + 1)
    this.total += area
    this.ranges.push(this.total)
    return area
  })
  console.log(this.ranges,this.total)
};

/**
* @return {number[]}
*/
Solution.prototype.pick = function () {

  let [x1, y1, x2, y2] = getRandomRect(this.rects, this.ranges, this.total)
  let x = x1 + Math.floor(Math.random() * (x2 - x1 + 1))
  let y = y1 + Math.floor(Math.random() * (y2 - y1 + 1))
  if (x < x1 || x > x2) console.log(`out x`)
  if (y < y1 || y > y2) console.log(`out y`)
  return [x, y]


  function getRandomRect(rects = [], ranges = [], total) {
    let p = Math.random() * total
    for (let i = 0; i < ranges.length; i++) {
      if (ranges[i] < p) continue
      console.log({i,p})
      return rects[i]
    }
    console.log(rects.length - 1)
    return rects[rects.length - 1]
  }
};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(rects)
* var param_1 = obj.pick()
*/

// let rects = [
//   [82918473, -57180867, 82918476, -57180863],
//   [83793579, 18088559, 83793580, 18088560],
//   [66574245, 26243152, 66574246, 26243153],
//   [72983930, 11921716, 72983934, 11921720]
// ]

// var obj = new Solution(rects)

// for (let i = 0; i < 100; i++) {
//   console.log(obj.pick())
// }
// console.log('done!')