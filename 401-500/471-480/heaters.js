/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  if (!houses.length) return 0
  if (!heaters.length) return 0
  houses.sort((a,b)=>a-b)
  heaters.sort((a,b)=>a-b)
  let minRadius = 0, j = 0

  testLeft(heaters[0], houses[0]) // leftmost house
  testRight(heaters[heaters.length - 1], houses[houses.length - 1]) // rightmost house

  while (houses[j] < heaters[0]) j++ // skip houses before first heater

  for (let i = 1; i < heaters.length; i++) {
    let mid = (heaters[i] + heaters[i - 1]) / 2
    while (houses[j] < mid) {
      testRight(heaters[i - 1], houses[j])
      j++
    }
    while (houses[j] < heaters[i]) {
      testLeft(heaters[i], houses[j])
      j++
    }
  }
  return minRadius

  function testLeft(heater, house) {
    let distance = (heater - house)
    minRadius = Math.max(minRadius, distance)
  }
  function testRight(heater, house) {
    let distance = (house - heater)
    minRadius = Math.max(minRadius, distance)
  }
};

// console.log(findRadius([1, 5], [2]))
// console.log(findRadius([1, 2, 3], [2]))
// console.log(findRadius([1, 2, 3, 4], [1, 4]))

console.log(findRadius(
[282475249,622650073,984943658,144108930,470211272,101027544,457850878,458777923]
,[823564440,115438165,784484492,74243042,114807987,137522503,441282327,16531729,823378840,143542612]
))