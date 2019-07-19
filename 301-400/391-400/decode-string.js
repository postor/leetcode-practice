/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  return r()
  function r(from = 0) {
    let i = from, str = ''
    while (i < s.length) {
      let char = s[i]
      if (/[a-zA-Z]/.test(char)) {
        str += char
        i++
        continue
      }
      if (char == ']') return [str, i]
      let [rtn, to] = parse(i)
      str += rtn
      i = to + 1
    }
    return str
  }

  function parse(from = 0) {
    let num = '', i = from
    while (i < s.length) {
      let char = s[i]
      if (char == '[') {
        let [str, to] = r(i + 1)
        let rtn = repeat(str, parseInt(num))
        return [rtn, to]
      }
      num += char
      i++
    }
  }

  function repeat(s, count) {
    let rtn = ''
    for (let i = 0; i < count; i++) {
      rtn += s
    }
    return rtn
  }

};

console.log(decodeString("3[a]2[b4[F]c]"))