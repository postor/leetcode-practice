/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var len = 0
  for (var i = 0; i < s.length; i++) {
    if (s.length - i < len) {
      return len
    }
    t(s, i)
  }
  return len

  function t(s, i) {
    var dic = {}
    for (var j = 0; i + j < s.length; j++) {
      var cur = s[i + j]
      if (dic[cur]) {
        if (j > len) {
          len = j
        }

        return
      }
      dic[cur] = true
      continue
    }
    if (j > len) {
      len = j
    }
  }
};