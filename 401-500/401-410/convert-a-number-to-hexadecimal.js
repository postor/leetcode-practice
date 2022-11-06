const DIC = getDic()

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if(!num) return '0'
  let t = num, rtn = '',count=0
  while (t&&count<8) {
    rtn = DIC.get(t & 15) + rtn
    t >>= 4
    count++
  }
  return rtn
};

function getDic() {
  let dic = new Map()
  dic.set(10, 'a')
  dic.set(11, 'b')
  dic.set(12, 'c')
  dic.set(13, 'd')
  dic.set(14, 'e')
  dic.set(15, 'f')

  for (let i = 0; i < 10; i++) {
    dic.set(i, '' + i)
  }
  return dic
}

// console.log(toHex(26))
// console.log(toHex(-1))