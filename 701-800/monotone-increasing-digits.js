/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
  // e.g. 1332
  let arr = toArr(N), i = 0
  // forward
  while (true) {
    let iNext = i + 1
    if (iNext >= arr.length) return toNum(arr)
    if (arr[iNext] >= arr[i]) {
      i++
      continue
    }

    // arr[i] bigger than arr[i+1], 1332=>1329
    assign9(arr, iNext)
    arr[i]--
    break
  }
  // backward 
  while (true) {
    let iPrev = i - 1
    if (iPrev < 0) return toNum(arr)
    if (arr[i] >= arr[iPrev]) return toNum(arr)

    // 1329=>1299
    arr[i] = 9
    arr[iPrev]--
    i--
    continue
  }

  function assign9(arr = [], startI) {
    for (let i = startI; i < arr.length; i++) {
      arr[i] = 9
    }
  }

  function toNum(arr = []) {
    let rtn = 0
    for (let i = 0; i < arr.length; i++) {
      rtn *= 10
      rtn += arr[i]
    }
    return rtn
  }
  function toArr(N = 0) {
    let rtn = [], t = N
    while (t) {
      let mod = t % 10
      rtn.push(mod)
      t = (t - mod) / 10
    }
    return rtn.reverse()
  }
};

console.log(monotoneIncreasingDigits(10))