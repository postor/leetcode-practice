/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  let i = 0, arr = preorder.split(',')
  return r() && i == arr.length
  function r() {
    if (i >= arr.length) return false
    if (arr[i] == '#') {
      i++
      return true
    }
    i++
    return r() && r()
  }

};

console.log(isValidSerialization("1,#,#,1"))