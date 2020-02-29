/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {
  if (!s.length) return 0

  const cache = new Array(s.length + 1).fill(0).map(
    x => new Array(s.length).fill(Number.MAX_SAFE_INTEGER))
  for (let i = 0; i < s.length; i++) {
    cache[0][i] = 0
    cache[1][i] = 1
  }
  for (let length = 2; length <= s.length; length++) {
    for (let start = 0; start <= s.length - length; start++) {
      let end = start + length - 1
      // if same as end, then no need for extra print 'aab' is the same as 'ab'
      if (s[start] === s[start + 1]) {
        cache[length][start] = cache[length - 1][start + 1]
        continue
      }
      if (s[end] === s[end - 1]) {
        cache[length][start] = cache[length - 1][start]
        continue
      }

      let l = cache[length - 1][start + 1] + 1,
        r = cache[length - 1][start] + 1

      // if we use first char print to end


      cache[length][start] = Math.min(l, r,
        minBaseOn(start, length, s[start]),
        minBaseOn(start, length, s[start + length - 1]))
    }
  }

  return cache[s.length][0]

  /**
   * min steps substr(start,length)
   * @param {*} start 
   * @param {*} length 
   * @param {*} base 
   */
  function minBaseOn(start, length, base) {
    let noneBases = getNoneBaseGroups(start, length, base)
    let startsAndSteps = [], steps = 1
    for (let [l, r] of noneBases) {
      startsAndSteps.push([l, steps])
      let step2 = Number.MAX_SAFE_INTEGER
      for (let [l1, step1] of startsAndSteps) {
        step2 = Math.min(step2, cache[r - l1 + 1][l1] + step1)
      }
      steps = step2
    }
    return steps
  }

  /**
   * say 'abcada', [bc,d] are none base groups, we need start and end index of them
   * @param {*} start 
   * @param {*} length 
   * @param {*} base 
   */
  function getNoneBaseGroups(start, length, base) {
    let last = base, groups = [], start1 = -1
    for (let i = start; i < start + length; i++) {
      if (last === base) {
        if (s[i] === base) continue
        start1 = i
        last = s[i]
        continue
      }
      // last !== base
      if (s[i] === base) {
        groups.push([start1, i - 1])
        start1 = -1
        last = s[i]
        continue
      }
    }
    if (last !== base) {
      groups.push([start1, start + length - 1])
    }
    return groups
  }
};

console.log(strangePrinter("abcadabdacbdcabcabadacd"))
console.log(strangePrinter("abcccadaabdaccccbbdddddcaabcabbbadacd"))
console.log(strangePrinter("bbdabcdababadcbdbcbdcbccaacadadccbacabdcdb"))
console.log(strangePrinter("baacdddaaddaaaaccbddbcabdaabdbbcdcbbbacbddcabcaaa"))
console.log(strangePrinter("aaabbb"))
console.log(strangePrinter("aba"))
