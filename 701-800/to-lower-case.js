/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let [a, A, Z] = ['a', 'A', 'Z'].map(x => x.charCodeAt(0))
  let offset = a - A
  let arr = [...str]
  for (let i = 0; i < arr.length; i++) {
    let code = arr[i].charCodeAt()
    if (code >= A && code <= Z) arr[i] = String.fromCharCode(code + offset)
  }
  return arr.join('')
};