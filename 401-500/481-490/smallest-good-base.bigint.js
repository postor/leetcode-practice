/**
 * @param {string} n
 * @return {string}
 */
var smallestGoodBase = function (n) {
  let val = BigInt(n)
  let base = val - BigInt(1)
  console.time('elements')
  let elements = getElements(base)
  console.log([...elements.entries()].map(x => x.join(',')))
  console.timeEnd('elements')
  console.time()
  let min = base
  getPosibleBases(elements)
  return '' + min


  function getPosibleBases(elements = new Map) {
    let set = new Set
    r()
    return set

    function r(left = elements, cur = BigInt(1)) {

      for (let [key] of left.entries()) {
        let cur1 = key * cur
        if (cur1 >= min) break // elements are sorted
        if (isGoodBase(cur1)) {
          min = cur1
          break
        }
        let left1 = cloneMapAndRemove1(left, key)
        r(left1, cur1)
      }
    }



    function cloneMapAndRemove1(map = new Map, one) {
      let m = new Map
      for (let [key, value] of map.entries()) {
        if (key == one) {
          if (value == 1) continue
          m.set(key, value - 1)
          continue
        }
        m.set(key, value)
      }
      return m
    }

  }

  function getElements(base) {
    let elements = new Map(), t = base
    outer:
    while (t > 1) {
      for (let i = BigInt(2); i <= t / BigInt(2); i++) {
        if (t % i == BigInt(0)) {
          t = t / i
          if (elements.has(i)) {
            elements.set(i, elements.get(i) + 1)
          } else {
            elements.set(i, 1)
          }
          continue outer
        }
      }
      if (elements.has(t)) {
        elements.set(t, elements.get(t) + 1)
      } else {
        elements.set(t, 1)
      }
      break
    }
    return elements
  }

  function isGoodBase(base) {
    let t = val
    while (t) {
      if (t % base != BigInt(1)) return false
      t -= BigInt(1)
      t /= base
    }
    return true
  }
};

// console.log(smallestGoodBase('13'))
// console.log(smallestGoodBase('4681'))

console.log(smallestGoodBase("35417244247309081"))
console.timeEnd()