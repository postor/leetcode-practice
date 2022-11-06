/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  let cache = [...s].map(sc => [...t].map(tc => tc == sc))
  let cache2 = cache.map(x => y => z => -1)
  return r()
  function r(si = 0, ti = 0) {
    if (ti == t.length) {
      return 1
    }
    if (si == s.length) {
      return 0
    }
    if (!cache2[si]) {
      console.log(cache2[si])
    }
    if (cache2[si][ti] > -1) return cache2[si][ti]

    if (!cache[si][ti]) {
      cache2[si][ti] = r(si + 1, ti)
      return cache2[si][ti]
    }

    cache2[si][ti] = r(si + 1, ti) + r(si + 1, ti + 1)
    return cache2[si][ti]
  }
};

console.log(numDistinct("adbdadeecadeadeccaeaabdabdbcdabddddabcaaadbabaaedeeddeaeebcdeabcaaaeeaeeabcddcebddebeebedaecccbdcbcedbdaeaedcdebeecdaaedaacadbdccabddaddacdddc", "bcddceeeebecbc"))