/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  // 0 1 10 11 100 101 110 111 1000....
  // 1|2|3    |4              |5... fold on '|'
  let result = [0]
  while (result.length < num + 1) {
    result = result.concat(result.map(x => x + 1))
  }
  result.length = num + 1
  return result
};

console.log(countBits(5))