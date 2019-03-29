/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let rtn = [], cur = 0
  outer:
  while (true) {
    let ws = [], len = 0
    while (true) {
      if (cur >= words.length) {
        if (ws.length) {
          rtn.push({ ws, len })
        }
        break outer
      }
      let w = words[cur]
      if (len + ws.length + w.length > maxWidth) {
        rtn.push({ ws, len })
        continue outer
      }
      ws.push(w)
      len += w.length
      cur++
    }
  }

  return rtn.map((o, i) => {
    if (i == rtn.length - 1) {
      let x = o.ws
      //最后一行
      let str = ''
      for (let i = 0; i < x.length - 1; i++) {
        str += x[i] + ' '
      }
      str += x[x.length - 1]
      str += getSpaces(maxWidth - str.length)
      return str
    }
    return deal(o.ws, o.len)
  })
  function deal(ws, len) {
    let left = maxWidth - len
    if (ws.length == 1) return ws[0] + getSpaces(left)

    let gaplen = Math.floor(left / (ws.length - 1))
    let gapLeft = left - gaplen * (ws.length - 1)
    let rtn = '', gapS = getSpaces(gaplen)
    for (let i = 0; i < ws.length - 1; i++) {
      rtn += ws[i] + gapS
      if (i < gapLeft) rtn += ' '
    }
    rtn += ws[ws.length - 1]
    return rtn
  }

  function getSpaces(n) {
    return Array(n).fill(' ').join('')
  }
};

console.log(fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16))