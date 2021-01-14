/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function (bottom, allowed) {
  // trie/dic so we know which is posible for top
  let trie = getTrie(allowed)
  // uniform each pos color to posible colors
  let posColors = bottom.split('').map(x => ({ [x]: {} }))
  // loop to upper layer, if violates rule return false
  while (posColors.length > 1) {
    // record for current top layer, which is next base layer
    let tpos = new Array(posColors.length - 1)
    // find each pos posible colors
    for (let i = 0; i < posColors.length - 1; i++) {
      let l = posColors[i], r = posColors[i + 1]
      let color = {}
      // each posible bottom left color
      for (let l1 in l) {
        // each posible bottom right color
        for (let r1 in r) {
          // add to pos possible color
          Object.assign(color, getNode(l1, r1))
        }
      }
      // violates rule 
      if (!Object.keys(color).length) return false
      // set possible color
      tpos[i] = color
    }
    // as base layer for next loop
    posColors = tpos
  }
  return true

  /**
   * find posible top colors
   * @param {*} lchar 
   * @param {*} rchar 
   */
  function getNode(lchar, rchar) {
    let t = trie
    t = t[lchar] || {}
    return t[rchar] || {}
  }

  /**
   * build an dic so getNode can go faster
   * @param {*} allowed 
   */
  function getTrie(allowed) {
    let trie = {}
    for (let str of allowed) {
      setTrie(str)
      // setTrie(str[1] + str[0] + str[2])
    }
    return trie

    function setTrie(str = []) {
      let t = trie
      for (let char of str) {
        if (!t[char]) t[char] = {}
        t = t[char]
      }
    }
  }
};

// console.log(pyramidTransition("BCD", ["BCG", "CDE", "GEA", "FFF"]))
// console.log(pyramidTransition("AABA", ["AAA", "AAB", "ABA", "ABB", "BAC"]))