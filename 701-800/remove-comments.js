/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function (source) {
  let states = {
    inital: 0,
    slash: 1,
    oneline: 2,
    multiline: 3,
    multilineend: 4
  }, rtn = [], state = states.inital

  let code = ''
  for (let line of source) {
    if (state != states.multiline) code = ''
    charloop:
    for (let char of line) {
      // if (code == '   k = k/2') debugger
      let append = true
      switch (state) {
        case states.inital:
          if (char == '/') {
            state = states.slash
            append = false
          }
          break
        case states.slash:
          if (char == '/') {
            // state = states.oneline
            state = states.inital
            // rtn.push(code)
            break charloop
          } else if (char == '*') {
            state = states.multiline
            append = false
          } else {
            state = states.inital
            code += '/'
          }
          break
        // case states.oneline:
        //   append = false
        //   break
        case states.multiline:
          append = false
          if (char == '*') state = states.multilineend
          break
        case states.multilineend:
          append = false
          if (char == '*') state = states.multilineend
          else if (char == '/') state = states.inital
          else state = states.multiline
          break
      }
      if (append) code += char

    }
    if (state == states.slash) {
      state = states.inital
      code += '/'
    }
    if (state == states.multilineend) state = states.multiline
    if (state != states.multiline) rtn.push(code)
  }
  return rtn.filter(x => x.length)
};

// console.log(removeComments(
//   ["void func(int k) {", "// this function does nothing /*", "   k = k*2/4;", "   k = k/2;*/", "}"]

// ).join('\n'))