/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
  // every seven choose five, then two make ten

  // first make two five chance equal

  let chooseLowerHigher = 4
  while (chooseLowerHigher == 4) {
    chooseLowerHigher = rand7()
  }
  let rtn = 6
  while (rtn > 5) {
    rtn = rand7()
  }

  return (chooseLowerHigher < 4) ? rtn : rtn + 5
};

// for (let i = 0; i < 100; i++) {
//   console.log(rand10())
// }

// function rand7() {
//   return Math.floor(Math.random() * 7) + 1
// }