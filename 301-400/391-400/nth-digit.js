/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let numsCount = 1, start = 1, rangeNums = 9, t = 10, n1 = n
  while (n1 > rangeNums * numsCount) {
    n1 -= rangeNums * numsCount
    start = t
    rangeNums = t * 10 - start - 1
    numsCount++
    t *= 10
  }
  //start = 10, n1=1
  n1 -= 1
  let mod = n1 % numsCount
  let offset = (n1 - mod) / numsCount
  let val = start + offset
  // console.log(val)
  return ('' + val)[mod]
};

// console.log(findNthDigit(3))
// console.log(findNthDigit(11))
console.log(findNthDigit(200))
//200-9=191(1-9)
//191-89*2=13个字符(10-99)
// 100 101 102 103 104
console.log(findNthDigit(1000))

