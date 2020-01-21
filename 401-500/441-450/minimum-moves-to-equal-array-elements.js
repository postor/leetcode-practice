/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  // where a move is incrementing n - 1 elements by 1.
  // that means decrementing 1
  let min = Math.min(...nums)
  return nums.reduce((a, b) => a + b) - min * nums.length
};