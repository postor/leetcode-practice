/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  let last = 0, current = 1
  for (let i = 0; i < N; i++) {
    let t = current
    current += last
    last = t
  }
  return last

};

// for(let i=0;i<10;i++){
//   console.log(fib(i))
// }
