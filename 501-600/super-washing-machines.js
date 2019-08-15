/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function (machines) {
  // is it possible
  let total = machines.reduce((a, b) => a + b)
  if (total % machines.length) return -1

  // possible and dp
  let average = total / machines.length
  let moves = machines.map(x => [0, 0])
  for (let i = 0; i < machines.length; i++) {
    let x = machines[i]
    if (x == average) continue
    if (x < average) {
      let num = average - x
      moves[i + 1][0] += num
      machines[i + 1] -= num
      continue
    }
    let num = x - average
    moves[i][1] = num
    machines[i + 1] += num
  }
  // console.log(moves.map(x=>x.join(',')).join('|'))
  return moves.reduce((n,[l,r])=>Math.max(l+r,n),0)  
};

console.log(findMinMoves([1, 0, 5]))

