/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let DIC = {
    R: 'Radiant',
    D: 'Dire'
  }, ENEMY = {
    R: 'D',
    D: 'R'
  }
  let arr = senate.split('')
  let curIndex = 0
  while (true) {
    let i = banNext(curIndex, ENEMY[arr[curIndex]])
    if (i === -1) {
      return DIC[arr[curIndex]]
    }
    (i > curIndex) ? (curIndex = nextIndex(curIndex)) : curIndex %= arr.length
  }

  function banNext(fromIndex, s = '') {
    let i = nextIndex(fromIndex)
    while (i !== fromIndex) {
      if (arr[i] === s) {
        arr.splice(i, 1)
        return i
      }
      i = nextIndex(i)
    }
    return -1 // not found
  }

  function nextIndex(cur) {
    cur++
    return cur % arr.length
  }
};

// console.log(predictPartyVictory("RD"))
// console.log(predictPartyVictory("RDD"))