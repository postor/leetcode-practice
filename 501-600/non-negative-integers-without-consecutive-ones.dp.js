/**
 * @param {number} num
 * @return {number}
 */
var findIntegers = function (num) {
  if (num < 2) return num + 1
  let dps = [
    [1], // dps[0][i] = count of nums with len i+1 start with 0, eg: i=1, dps[0][i]=2, [00,01]
    [1]  // dps[1][i] = count of nums with len i+1 start with 1, eg: i=1, dps[0][i]=1, [10]
  ]
  //             root 
  //          /       \      
  //         0         1
  //      /    \     /     \
  //     00    01    10     11
  //    / \   / \     / \  
  // 000 001 010 011 100 101
  // 000 001 010     100 101

  // total(101) = left(10) + count(100) +1 
  //            = left(1) + 1 + 1 
  //            = count(0) + 2
  //            = 3 + 2  


  function left(){
    
  }

  function count(level) {
    return dps[0][level]
  }



};

// new Array(10).fill(0).forEach((x, i) => {
//   console.log(i + 1 + '=>' + findIntegers(i + 1))
// })

// console.log(findIntegers(10))
console.time()
console.log(findIntegers(997289222))
console.timeEnd()
