/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let rtn = new Array(n).fill(0).map((x, i) => i + 1 + '')

  for (let i = 3; i <= n; i += 3) {
    rtn[i-1] = 'Fizz'
  }

  for (let i = 5; i <= n; i += 5) {
    if(rtn[i-1]!='Fizz'){
      rtn[i-1] = 'Buzz'
      continue
    }
    rtn[i-1] = 'FizzBuzz'
  }

  return rtn
};

// console.log(fizzBuzz(15))