/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
  let rtn = [], lr = [1, n], cur = 0
  // arr = 1, n, 2, n-1
  // abs = n-1,n-2,n-3....
  // first k-1 as upper array, then as order abs=1
  for (let i = 1; i < k; i++) {
    rtn.push(lr[cur])
    if (cur == 0) {
      lr[cur]++
      cur = 1
    } else {
      lr[cur]--
      cur = 0
    }
  }
  while (rtn.length < n) {
    rtn.push(lr[cur])
    if (cur == 0) {
      lr[cur]++
    } else {
      lr[cur]--
    }
  }
  return rtn
};

// console.log(constructArray(92, 80))
// console.log(constructArray(3, 1))