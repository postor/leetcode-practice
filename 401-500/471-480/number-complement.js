/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let leading1 = 1
  while (leading1 <= num) {
    leading1 <<= 1
    if (!leading1) {
      return 2147483647 ^ num
    }
  }
  leading1 -= 1
  return leading1 ^ num
};

// console.log(findComplement(2147483647))