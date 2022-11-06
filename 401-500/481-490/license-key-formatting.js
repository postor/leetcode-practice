const replaceDic = getReplaceDic()
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
  let rtn = '', groupLength = 0
  for (let i = S.length - 1; i >= 0; i--) {
    if (S[i] == '-') continue
    if (groupLength == K) {
      rtn = '-' + rtn
      groupLength = 0
    }
    rtn = replaceDic[S[i]] + rtn
    groupLength++
  }
  return rtn
};

function getReplaceDic() {
  let dic = {}
  // numbers
  for (let i = 0; i < 10; i++) {
    let char = '' + i
    dic[char] = char
  }
  // A-Z
  for (let i = 65; i < 91; i++) {
    let char = String.fromCharCode(i)
    dic[char] = char
  }
  // a-z
  for (let i = 97; i < 123; i++) {
    let offset = 97 - 65
    let key = String.fromCharCode(i), value = String.fromCharCode(i - offset)
    dic[key] = value
  }
  return dic
}

// console.log(licenseKeyFormatting('5F3Z-2e-9-w', 4), "5F3Z-2E9W")
// console.log(licenseKeyFormatting('2-5g-3-J', 2), "2-5G-3J")
// console.log(licenseKeyFormatting("2-4A0r7-4k", 4), "24A0-R74K")