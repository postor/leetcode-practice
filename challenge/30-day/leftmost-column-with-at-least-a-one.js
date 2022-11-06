/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function (binaryMatrix) {
  let [n, m] = binaryMatrix.dimensions()
  let rtn = m
  for (let i = 0; i < n; i++) {
    let c = rowResult(i)
    if (c !== -1) rtn = Math.min(c, rtn)
  }
  return rtn === m ? -1 : rtn

  function rowResult(rowIndex) {
    if (binaryMatrix.get(rowIndex, 0) === 1) return 0
    if (binaryMatrix.get(rowIndex, m - 1) === 0) return -1
    return half()
    function half(l = 0, r = m - 1) {
      if (r - l === 1) return r
      let mid = Math.floor((l + r) / 2)
      if (binaryMatrix.get(rowIndex, mid) === 1) {
        return half(l, mid)
      }
      return half(mid, r)
    }
  }

};