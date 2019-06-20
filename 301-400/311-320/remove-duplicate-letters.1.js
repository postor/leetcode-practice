/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  // 统计statistic

  let dic = {}
  for (let i = 0; i < s.length; i++) {
    dic[s[i]] = (dic[s[i]] || 0) + 1
  }

  // cbacdcbc
  // cbac d cbc
  // [cb a c] d [c b c]
  // [[c b] a c] d [c b c]

  let min = Number.MAX_SAFE_INTEGER, result = '', resultLen = Object.keys(dic).length
  r()
  return result
  function r(start = 0, d = { ...dic }, voilates = 0, cur = '') {
    // 超出的提前终止
    if (voilates > min) return
    // 正常结束
    if (start == s.length) {
      // 结果个数不对
      if (cur.length != resultLen) return
      // 新的结果
      if (voilates == min) {
        // 顺序上没有更优
        if (compare(result, cur) >= 0) return
      }
      // 排序更优则更新
      min = voilates
      result = cur
      return
    }
    let char = s[start]
    // 不能使用了
    if (d[char] == 0) {
      return r(start + 1, d, voilates, cur)
    }
    if (d[char] > 1) {
      // 可以不用
      r(start + 1, {
        ...d,
        [char]: d[char] - 1
      }, voilates, cur)
    }
    // 使用这个字母
    let v = cur.length
      ? cur[cur.length - 1] > char
        ? voilates + 1
        : voilates
      : 0

    r(start + 1, {
      ...d,
      [char]: 0
    }, v, cur + char)
  }

  function compare(x = '', y = '') {
    for (let i = 0; i < x.length; i++) {
      if (y[i] > x[i]) return 1
      if (y[i] < x[i]) return -1
    }
    return 0
  }
};

console.log(removeDuplicateLetters("cbacdcbc"))