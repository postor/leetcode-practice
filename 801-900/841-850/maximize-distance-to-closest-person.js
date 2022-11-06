/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  let max = 0, count = 0, i = 0

  // left empty
  while (seats[i] == 0) {
    count++
    i++
  }
  max = Math.max(max, count)
  count = 0

  // middle
  let cur = 1
  for (; i < seats.length; i++) {
    if (cur == 0) {
      if (seats[i] == 0) {
        count++
        continue
      }
      endEmpty()
      continue
    }
    if (seats[i] == 1) continue
    cur = 0
    count = 1
  }
  // right empty
  if(cur==0){
    max = Math.max(max, count)
  }
  return max

  function endEmpty() {
    max = Math.max(Math.floor((count + 1) / 2), max)
    cur = 1
  }
};

console.log(maxDistToClosest([1, 0, 0, 1]))

// console.log(maxDistToClosest([1, 0, 0, 0, 1, 0, 1]))
// console.log(maxDistToClosest([1, 0, 0, 0]))
// console.log(maxDistToClosest([0, 1]))