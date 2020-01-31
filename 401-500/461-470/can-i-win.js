/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
  // edge case, nonsense no matter true or false
  if (desiredTotal <= 0) return true
  
  // can not reach after all chosen, no one can win, nonsense
  if ((maxChoosableInteger * (maxChoosableInteger + 1) / 2) < desiredTotal) return false
  
  let cache = {}
  let rtn = chooseMyTurn(0, 0)
  return rtn

  function chooseMyTurn(curTotal, usedMask) {
    // try use cached result
    if (!cache[curTotal]) cache[curTotal] = {}
    if (cache[curTotal][usedMask] !== undefined) return cache[curTotal][usedMask]

    // try each number
    for (let i = 1; i <= maxChoosableInteger; i++) {
      let mask = 1 << i
      if (usedMask & mask) continue // i is used
      if (curTotal + i >= desiredTotal) return saveCache(true) // I can reach desiredTotal
      if (!chooseOtherTurn(curTotal + i, usedMask | mask)) return saveCache(true) // I can force other player fail
    }
    return saveCache(false)

    function saveCache(result) {
      cache[curTotal][usedMask] = result
      return result
    }
  }

  // he has the same idea as I
  function chooseOtherTurn(curTotal, usedMask) {
    return chooseMyTurn(curTotal, usedMask)
  }

};

// console.log(canIWin(5, 9), true)
// console.log(canIWin(10, 11), false)