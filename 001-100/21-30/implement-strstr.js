/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (tryIndex(i)) {
      return i
    }
  }
  return -1

  function tryIndex(i) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] != needle[j]) {
        return false
      }
    }
    return true
  }
};

console.log(strStr("hello", 'llo'))