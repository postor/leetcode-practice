/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  nums.sort((a,b)=>a-b)
  let currents = []
  nums.forEach(x => {
    let toAppend = [x]
    for (let i = 0; i < currents.length; i++) {
      let y = currents[i]
      if (x % y[y.length - 1] == 0) {
        toAppend = y.concat(x)
        break
      }
    }
    // console.log(JSON.stringify({ toAppend, currents }))
    currents.push(toAppend)
    currents = currents.sort((a, b) => b.length - a.length)
    // console.log(currents.map(x => x[x.length - 1] + ':' + x.length).join('|') + "\n")
  })
  return currents[0]||[]
};
// console.log(largestDivisibleSubset([7, 1, 2, 3, 4, 16, 12, 24,48]))
