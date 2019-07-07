/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
  let map = [
    'zero', //z 0
    'one',  // o after four/zero 8
    'two', //w 1
    'three', // r after zero/four 4
    'four', // u 2
    'five', // f after four  5
    'six', //x 3
    'seven', // v after five 6
    'eight', // g 7
    'nine', // 9
  ]

  let seq = [0, 2, 4, 6, 3, 5, 7, 8, 1, 9]

  let nums = map.map(x => meta(x))
  let whole = meta(s)
  let rtn = []
  seq.forEach((i) => {
    let m = nums[i]
    while (Object.keys(m).every(k => whole[k] >= m[k])) {
      Object.keys(m).forEach(k => whole[k] -= m[k])
      rtn.push(i)
    }
  })
  rtn.sort((a,b)=>a-b)
  return rtn.join('')


  function meta(str = '') {
    let dic = {}
    for (let i = 0; i < str.length; i++) {
      dic[str[i]] = (dic[str[i]] || 0) + 1
    }
    return dic
  }
};

console.log(originalDigits('owoztneoer'))