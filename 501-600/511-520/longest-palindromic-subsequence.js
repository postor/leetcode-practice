/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  // bbbab 0
  // bba+2
  // bb=2 ba=1 ba=1

  const CACHE = new Array(s.length).fill(0).map(x => new Array(s.length).fill(0))
  return r(0, s.length - 1)

  function r(start, end) {
    if (start > end) return 0
    if (start == end) return 1
    if (CACHE[start][end]) return CACHE[start][end]

    if (s[start] == s[end]) {
      CACHE[start][end] = 2 + r(start + 1, end - 1)
      return CACHE[start][end]
    }

    CACHE[start][end] = Math.max(r(start, end - 1), r(start + 1, end))
    return CACHE[start][end]
  }

};

console.log(longestPalindromeSubseq('bbbab'))