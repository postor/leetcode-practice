/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
  return linear(n)
  // 1
  // 1	0
  // 1	0	0
  // 1	0	0	1
  // 1	0	0	1	0
  // 1	0	0	1	0	0
  // 1	0	0	1	0	0	0
  // 1	0	0	1	0	0	0	0
  // 1	0	0	1	0	0	0	0	1
  // 1	0	0	1	0	0	0	0	1	0
  // 1	0	0	1	0	0	0	0	1	0	0
  // 1	0	0	1	0	0	0	0	1	0	0	0
  // 1	0	0	1	0	0	0	0	1	0	0	0	0
  // 1	0	0	1	0	0	0	0	1	0	0	0	0	0
  // 1	0	0	1	0	0	0	0	1	0	0	0	0	0	0
  // 1	0	0	1	0	0	0	0	1	0	0	0	0	0	0	1
  // 1	0	0	1	0	0	0	0	1	0	0	0	0	0	0	1	0
  // 1	0	0	1	0	0	0	0	1	0	0	0	0	0	0	1	0	0
  // 1	0	0	1	0	0	0	0	1	0	0	0	0	0	0	1	0	0	0


  // let bulps = new Array(n).fill(false)
  // for (let i = 0; i < n; i++) {
  //   for (let step = 1; step <= n; step++) {
  //     (0 == (i + 1) % step) && (bulps[i] = !bulps[i])
  //   }
  // }
  // let count1 = bulps.filter(x => x).length
  // let count2 = linear(n)
  // return count1 == count2
  function linear(n) {
    let i = 0, c = 0, iterateCount = 0
    while (i < n) {
      c += 1
      i += 1
      iterateCount++
      i += 2 * iterateCount
    }
    return c
  }
};

for (let i = 1; i < 100; i++) {
  console.log(bulbSwitch(i))
}
