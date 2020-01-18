/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  if (!s.length) return 0
  let isLastBlank = true, segments = 0
  for (let i = 0; i < s.length; i++) {
    let isThisBlank = s[i] == ' '
    if (isLastBlank == isThisBlank) {
      continue
    }
    if (isLastBlank) {
      segments++
    }
    isLastBlank = isThisBlank
  }
  return segments
};

// console.log(countSegments("Hello, my name is John"))