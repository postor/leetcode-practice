/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
  if (!indices.length) return s
  let rtn = [], cur = 0
  let order = indices.map((x, i) => i)
  order.sort((a, b) => indices[a] - indices[b])
  for (let o = 0; o < indices.length; o++) {
    let i = order[o]
    rtn.push(s.substring(cur, indices[i]))
    cur = indices[i]
    if (occur(cur, sources[i])) {
      rtn.push(targets[i])
      cur += sources[i].length
    }
  }
  rtn.push(s.substring(cur))
  return rtn.join('')

  function occur(i, sub) {
    for (let j = 0; j < sub.length; j++) {
      if (s[i + j] !== sub[j]) return false
    }
    return true
  }
};

console.log(findReplaceString(

  "vmokgggqzp",
  [3, 5, 1],
  ["kg", "ggq", "mo"],
  ["s", "so", "bfr"]
))