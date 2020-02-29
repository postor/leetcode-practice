/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let dic = {}
  for (let m of moves) {
    dic[m] = (dic[m] || 0) + 1
  }
  return dic.R === dic.L && dic.U == dic.D
};