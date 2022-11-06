/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
  let charCodes = {
    a: 'a'.charCodeAt(0),
    z: 'z'.charCodeAt(0),
    A: 'A'.charCodeAt(0),
    Z: 'Z'.charCodeAt(0),
  }, states = {
    init: 0,
    waitingUpper: 1,
    waitingLower: 2,
    waitingLowerAny: 3
  }


  function match(patten, str) {
    let i = 0, j = 0, state = states.init
    while (true) {

    }
  }

};

