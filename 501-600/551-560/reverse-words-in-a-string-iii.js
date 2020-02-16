/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // return s.split(' ').map(x=>x.split('').reverse().join('')).join(' ')
  let arr = s.split(''), last = ' ', start
  for (let i = 0; i < s.length; i++) {
    if (last === ' ') {
      if (arr[i] !== ' ') start = i
    } else if (arr[i] === ' ') {
      reverse(start, i - 1)
    }
    last = arr[i]
  }
  if (last !== ' ') {
    reverse(start, arr.length - 1)
  }
  return arr.join('')

  function reverse(start, end) {
    for (let i = start, j = end; i < j; i++ , j--) {
      let t = arr[i]
      arr[i] = arr[j]
      arr[j] = t
    }
  }
};

// console.log(reverseWords("Let's take LeetCode contest"))