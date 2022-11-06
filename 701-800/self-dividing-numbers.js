/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let rtn = []
  for (let i = left; i <= right; i++) {
    if (check(i)) rtn.push(i)
  }
  return rtn

  function check(n) {
    let t = n
    while (t) {
      let mod = t % 10
      if (!mod) return false
      if (n % mod) return false
      t = (t - mod) / 10
    }
    return true
  }
};
// console.log(selfDividingNumbers(1, 22))