/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function (s1, n1, s2, n2) {
  let m1 = meta(s1), count = 0, i2 = 0, j2 = 0, j1 = 0, cycle1, cycle2
  while (j1 < n1) {
    if (!i2 && j1 && !cycle1) {
      cycle1 = j1
      cycle2 = count * n2 + j2
      let loop = 1
      while ((loop + 1) * cycle1 <= n1) loop++
      j1 = loop * cycle1
      j2 = cycle2 * loop
      count = j2 >= n2 ? (j2 - (j2 % n2)) / n2 : 0
      j2 = j2 % n2
      continue
    }
    let i1 = 0
    while (true) {
      let char = s2[i2]
      if (!m1[char]) return 0
      if (m1[char].length <= i1) break
      i1 = m1[char][i1] + 1
      i2++
      if (i2 == s2.length) {
        i2 = 0
        j2++
        if (j2 == n2) {
          count++
          j2 = 0
        }
      }
    }
    j1++
  }
  return count

  function meta(s = '') {
    let dic = {}, last = {}
    for (let i = 0; i < s.length; i++) {
      let char = s[i]
      if (!dic[char]) dic[char] = []
      dic[char].push(i)
    }
    let dic2 = {}
    Object.keys(dic).forEach(k => {
      let ids = dic[k]
      dic2[k] = new Array(ids[ids.length - 1] + 1).fill(ids[ids.length - 1])
      let last = 0
      for (let i = 0; i < ids.length - 1; i++) {
        for (; last <= ids[i]; last++) {
          dic2[k][last] = ids[i]
        }
      }
    })
    return dic2
  }
};

// console.log(getMaxRepetitions("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
// ,1000000
// ,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
// ,1000000))


console.log(getMaxRepetitions("lovelive"
,10
,"lovelive"
,10))