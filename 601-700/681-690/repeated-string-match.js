/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function (A, B) {
  for (let i = 0; i < A.length; i++) {
    if (match(i)) {
      return Math.ceil((i + B.length) / A.length)
    }
  }
  return -1

  function match(i) {
    for (let j = 0; j < B.length; j++) {
      if (A[(i + j) % A.length] !== B[j]) return false
    }
    return true
  }
};