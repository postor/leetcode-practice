/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  if (!bank.includes(end)) return -1
  let q = [[end, 0]]
  let used = bank.map(x => x == end)
  while (q.length) {
    let [target, step] = q.shift()
    if (diff(start, target) == 1) return step + 1
    for (let i = 0; i < bank.length; i++) {
      if (used[i]) continue
      let t = bank[i]
      if (diff(t, target) == 1) {
        q.push([t, step + 1])
        used[i] = true
      }
    }
  }
  return -1

  function diff(a = '', b = end) {
    let c = 0
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) c++
    }
    return c
  }
};

// console.log(minMutation("AACCGGTT"
//   , "AACCGGTA"
//   , ["AACCGGTA"]))

// console.log(minMutation("AACCGGTT"
//   , "AAACGGTA"
//   , ["AACCGGTA", "AACCGCTA", "AAACGGTA"]))