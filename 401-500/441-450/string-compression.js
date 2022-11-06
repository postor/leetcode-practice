/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  if (!chars.length) return 0
  let totalLength = 0, lastChar = chars[0], repeated = 1
  for (let i = 1; i < chars.length; i++) {
    let char = chars[i]
    // no change
    if (lastChar === char) {
      repeated++
      continue
    }
    // changed    
    onChange(char)
  }
  onChange(undefined)

  return totalLength

  function onChange(char) {
    let curLengthStr = '' + repeated
    let curLength = Math.min(repeated, curLengthStr.length + 1)
    chars[totalLength] = lastChar
    if (curLength > 1) {
      for (let i = 0; i < curLengthStr.length; i++) {
        chars[totalLength + 1 + i] = curLengthStr[i]
      }
    }
    totalLength += curLength
    lastChar = char
    repeated = 1
  }
};

// console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]))