/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let v1arr = version1.split('.')
  let v2arr = version2.split('.')
  let len = Math.max(v1arr.length, v2arr.length)
  for (let i = 0; i < len; i++) {
    let str1 = v1arr[i] || '0'
    let str2 = v2arr[i] || '0'
    let cmp = parseInt(str1) - parseInt(str2)
    if (cmp > 0) return 1
    if (cmp < 0) return -1
  }
  return 0
};

console.log(compareVersion('1.1.1', '1.0.1'))
console.log(compareVersion('1.0', '1.1.1'))
console.log(compareVersion('1.1', '1.1.0'))