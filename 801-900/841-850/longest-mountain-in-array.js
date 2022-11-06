/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
  const UP = 1, DOWN = -1
  let start = -1, direction = UP, rtn = 0

  for (let cur = 1; cur < arr.length; cur++) {
    let change = arr[cur] - arr[cur - 1]
    if (start == -1) {
      if (change > 0) {
        direction = UP
        start = cur - 1
        continue
      }
      continue
    }
    if (direction == UP) {
      if (change == 0) {
        start = -1
        continue
      }
      if (change > 0) {
        continue
      }
      // change <0
      direction = DOWN
      continue
    }
    // direction = down
    if (change < 0) continue
    // change >=0
    rtn = Math.max(rtn, cur - start)
    if (change > 0) {
      direction = UP
      start = cur - 1
      continue
    }
    // change==0
    start = -1
  }
  if (direction == DOWN) rtn = Math.max(rtn, arr.length - start)
  return rtn
};

console.log(longestMountain([2, 1, 4, 7, 3, 2, 5]))