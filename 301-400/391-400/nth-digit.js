/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let t = 10, length = 1, count = 9, left = n
  while (left > count * length) {
    left -= count * length
    t *= 10
    length++
    count = t - t/10
  }

  let rtn = getDigit(t, length, left)
  return rtn

  function getDigit(t, length, left) {
    left -= 1
    let m = left % length
    let offset = (left - m) / length
    let num = t / 10 + offset
    return ('' + num)[m]
  }
};

// console.log(2890, findNthDigit(2890))

// for(let i=2890;i<4000;i++){
//   console.log(i, findNthDigit(i))
// }

// let str = '', every = 1, cur = 0, curNum = 1, target = 10
// for (let i = 1; i < 10001; i++) {
//   str += findNthDigit(i)
//   cur++
//   if (cur == every) {
//     cur = 0
//     curNum++
//     str += `|${i},`
//     if (curNum == target) {
//       target *= 10
//       every++
//     }
//   }
// }
// console.log(str)

// console.log(3, findNthDigit(3))
// console.log(11, findNthDigit(11))
// console.log(200, findNthDigit(200))
// //200-9=191(1-9)
// //191-89*2=13个字符(10-99)
// // 100 101 102 103 104
// console.log(10000, findNthDigit(10000))

