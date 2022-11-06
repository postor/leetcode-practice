/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  //   All letters in this word are capitals, like "USA".
  //   All letters in this word are not capitals, like "leetcode".
  //   Only the first letter in this word is capital, like "Google".

  // use state machine
  let STATES = {
    inital: 0,
    firstCapital: 1,
    // firstNoneCaptial: 2,
    onlyCapital: 3,
    onlyNoneCaptial: 4,
    error: -1
  },
    trans = {
      [STATES.inital]: (i) => isCaptial(i)
        ? STATES.firstCapital
        : STATES.onlyNoneCaptial,
      [STATES.firstCapital]: (i) => isCaptial(i)
        ? STATES.onlyCapital
        : STATES.onlyNoneCaptial,
      [STATES.onlyNoneCaptial]: (i) => isCaptial(i)
        ? STATES.error
        : STATES.onlyNoneCaptial,
      [STATES.onlyCapital]: (i) => isCaptial(i)
        ? STATES.onlyCapital
        : STATES.error
    }

  let state = STATES.inital
  for (let i = 0; i < word.length; i++) {
    state = trans[state](i)
    if (state == STATES.error) return false
  }
  return true

  function isCaptial(i) {
    let charCode = word.charCodeAt(i)
    return (charCode > 64) && (charCode < 91)
  }
};


// var word = "Someword", N = 1000000;
// console.time('a')
// console.time('toUpperCase')
// for (let i = 0; i < N; i++) {
//   word[0] === word[0].toUpperCase()
// }
// console.timeEnd('toUpperCase');
// console.time('test')
// for (let i = 0; i < N; i++) {
//   /[A-Z]/.test(word[0])
// }
// console.timeEnd('test');

// console.time('charCodeAt')
// for (let i = 0; i < N; i++) {
//   let charCode = word[0].charCodeAt(0);
//   (charCode > 64) && (charCode < 91)
// }
// console.timeEnd('charCodeAt');

// // toUpperCase: 282.14208984375ms
// // test: 197.286865234375ms
// // charCodeAt: 181.777099609375ms


// console.log(detectCapitalUse('USA'))
// console.log(detectCapitalUse('FlaG'))