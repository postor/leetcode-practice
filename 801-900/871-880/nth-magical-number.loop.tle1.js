/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function (n, a, b) {
  let modby = Math.pow(10, 9) + 7, rtn = 0
  if (a === b) return (n * a) % modby

  let gens = [genNumber(a), genNumber(b)]
  let curs = gens.map(x => x.next().value)

  for (let i = 0; i < n; i++) {
    let diff = compare()
    if (diff < 0) {
      rtn = moveIndex(0)
    } else if (diff > 0) {
      rtn = moveIndex(1)
    } else {
      rtn = moveIndex(0)
      rtn = moveIndex(1)
    }
  }
  return rtn

  function compare() {
    let [a, b] = curs
    if (a.mods === b.mods) return a.left - b.left
    return a.mods - b.mods
  }

  function moveIndex(i) {
    let rtn = curs[i].left
    curs[i] = gens[i].next().value
    return rtn
  }

  function* genNumber(x) {
    let t = x, mods = 0
    while (true) {
      let left = t % modby
      mods += (t - left) / modby
      yield { left, mods }
      t = left + x
    }
  }
};

console.log(nthMagicalNumber(4, 2, 3))