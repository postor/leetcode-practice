/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let stack = [], rtn = T.map(x => 0)
  for (let i = 0; i < T.length; i++) {
    while (stack.length) {
      if (T[stack[stack.length - 1]] < T[i]) {
        let j = stack.pop()
        rtn[j] = i - j
      } else {
        break
      }
    }
    stack.push(i)
  }
  for (let i of stack) {
    rtn[i] = 0
  }
  return rtn
};

// /**
//  * @param {number[]} T
//  * @return {number[]}
//  */
// var dailyTemperatures = function (T) {
//   let rtn = T.map(x => 0)
//   for (let i = 1; i < T.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (rtn[j] != 0) continue
//       if (T[i] > T[j]) rtn[j] = i - j
//     }
//   }
//   return rtn
// };