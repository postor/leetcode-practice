let dic = {
  0: 1,
  1: {
    0: 2,
    1: 2,
  }
}

/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  let t = dic
  for (let i = 0; i < bits.length - 1; i++) {
    let b = bits[i]
    if (!t[b]) return false
    if (typeof t[b] == 'number') {
      t = dic
      continue
    }
    t = t[b]
  }
  return t ? t[bits[bits.length - 1]] === 1 : false
};

console.log(isOneBitCharacter(
  [1,0,0]))