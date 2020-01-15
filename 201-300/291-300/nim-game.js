/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  //  I win total  
  //  true      1,2,3,  5,6,7,  9,10,11
  //  false           4,      8,

  return !!(n % 4)
};