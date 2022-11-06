/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  // just convert to numbers

  const MAP = {
    A: 0,
    C: 1,
    G: 2,
    T: 3
  }
  const MAPBACK = {
    0: 'A',
    1: 'C',
    2: 'G',
    3: 'T',
  }

  let slideWindow = s.substr(0, 9).split('').map(x => MAP[x])
    , seen = {}
    , repeated = new Map()
    , cur = 9

  while (s[cur]) {
    slideWindow.push(MAP[s[cur]])
    let num = parseInt(slideWindow.join(''), 4) // will 4 base quicker?
    if (seen[num] && !repeated.has(num)) {
      repeated.set(num, slideWindow.map(x => MAPBACK[x]).join(''))
    }
    seen[num] = true
    cur++
    slideWindow.shift()
  }
  return [...repeated.values()]
};

// console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'))