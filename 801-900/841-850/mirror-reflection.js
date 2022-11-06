/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function (p, q) {
  const mis = 2e-14
  let k = q / p, curPos = [0, 0], ends = [[p, 0], [p, p], [0, p]]
  while (true) {
    curPos = nextPos(curPos)
    if (curPos.every(x => (x == 0 || x == p))) {
      for (let i = 0; i < ends.length; i++) {
        if (isSame(curPos, ends[i])) return i
      }
    }
    k = -k
  }


  function nextPos([x, y]) {
    let a = y - k * x
      , trys = [() => crossX(0), () => crossX(p), () => crossY(0), () => crossY(p)]
    for (let fn of trys) {
      let rtn = fn()
      if (possible(rtn)) return rtn
    }

    debugger

    function crossX(i) {
      return [i, k * i + a]
    }

    function crossY(i) {
      return [(i - a) / k, i]
    }

    function possible([x1, y1]) {
      if (isSame([x1, y1], [0, 0])) return false
      if (isSame([x1, y1], [x, y])) return false
      if (x1 < 0 - mis || x1 > p + mis || y1 < 0 - mis || y1 > p + mis) return false
      return true
    }

  }

  function isSame(p1,p2 ) {
    if(!p1||!p2) debugger
    let [x1, y1] = p1,[x2, y2]=p2
    return (Math.abs(x1 - x2) < mis) && (Math.abs(y1 - y2)<mis)
  }

};

// console.log(mirrorReflection(2, 1)) // 2
// console.log(mirrorReflection(3, 1)) // 1
console.log(mirrorReflection(20, 17)) // 1
