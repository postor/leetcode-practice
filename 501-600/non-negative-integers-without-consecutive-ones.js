/**
 * @param {number} num
 * @return {number}
 */
var findIntegers = function (num) {
  if (num < 2) return num + 1
  let count = 2, arr = [0, 1], topBit = 1, lastAddCount = 1
  while (true) {
    let top = topBit << 1
    let toAdds = []
    for (let i = 0; i < arr.length - lastAddCount; i++) {
      let toAdd = arr[i] | top
      if (toAdd > num) break
      toAdds.push(toAdd)
    }
    if (!toAdds.length) {
      return count
    }
    topBit = top
    lastAddCount = toAdds.length
    count += toAdds.length
    arr = arr.concat(toAdds)
  }
};

// new Array(10).fill(0).forEach((x, i) => {
//   console.log(i + 1 + '=>' + findIntegers(i + 1))
// })

// console.log(findIntegers(10))
console.time()
console.log(findIntegers(997289222))
console.timeEnd()
