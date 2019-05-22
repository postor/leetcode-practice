/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let rtn = []
  let gaplen = 3 * 4 - s.length
  gaps()
  return rtn
  function testGap(gap = []) {
    let start = 0, trtn = []
    for (let i = 0; i < gap.length; i++) {
      let len = 3 - gap[i]
      let t = s.substr(start, len)
      if (len > 1 && t[0] === '0') return
      if (gap[i] == 0 && parseInt(t) > 255) return
      trtn.push(t)
      start += len
    }
    rtn.push(trtn.join('.'))
  }

  function gaps(left = gaplen, cur = [0, 0, 0, 0], start = 0) {
    if (!left) {
      testGap(cur)
      return
    }

    for (let i = start; i < cur.length; i++) {
      if (cur == 2) continue
      let t = cur.concat()
      t[i]++
      gaps(left - 1, t, t[i] < 2 ? i : i + 1)
    }
  }
};

console.log(restoreIpAddresses("0000"))