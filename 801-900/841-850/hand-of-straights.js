/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
 var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize) return false
  let dic = toDic(hand)
  let keys = [...dic.keys()]
  keys.sort((a, b) => a - b)
  for (let k of keys) {
    if (!dic.has(k)) continue
    let count = dic.get(k)
    for (let i = 0; i < groupSize; i++) {
      if (del(k + i, count)) return false
    }
  }
  return true

  function del(k, count) {
    if (!dic.has(k)) return true
    let left = dic.get(k) - count
    if (left < 0) return true
    if (!left) dic.delete(k)
    else dic.set(k, left)
  }

  function toDic(cards) {
    let d = new Map
    for (let i of cards) {
      d.set(i, d.has(i) ? d.get(i) + 1 : 1)
    }
    return d
  }

};