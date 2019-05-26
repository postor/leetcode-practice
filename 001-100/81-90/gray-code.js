/**
 * @param {number} n
 * @return {number[]}
 * My idea is to generate the sequence iteratively. For example, when n=3, we can get the result based on n=2.
 * 00,01,11,10 -> (000,001,011,010 ) (110,111,101,100). The middle two numbers only differ at their highest bit, while the rest numbers of part two are exactly symmetric of part one. It is easy to see its correctness.
 */
var grayCode = function (n) {
  // 0 的情况
  let rtn = [0]

  //从0到n-1（n次）每次长度翻倍
  for (let i = 0; i < n; i++) {
    let higherBit = 1 << i
    // 补充的这一半是倒着的
    for (let k = rtn.length - 1; k >= 0; k--) {
      // 补充的每一个都额外的高位补1
      rtn.push(rtn[k] | higherBit)
    }
  }

  return rtn
};