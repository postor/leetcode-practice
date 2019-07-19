/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  let arr = new Array(n).fill(0).map((x, i) => i + 1)
  let removeFirst = true
  while (arr.length > 1) {
    arr = arr.filter((x, i) => (i % 2 == removeFirst))
    removeFirst = !removeFirst
  }
  return arr[0]
};

console.log(lastRemaining(9))