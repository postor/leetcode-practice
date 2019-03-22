/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var flag = x > 0 ? 1 : -1
  x = x > 0 ? x : -x
  var arr = []
  while (true) {
    var w0 = x % 10
    arr.push(w0)
    var x = Math.floor(x / 10)
    if (x < 1) {
      break;
    }
  }
  var rtn = 0
  for (var i = 0; i < arr.length - 1; i++) {
    rtn += arr[i]
    rtn *= 10
  }
  rtn += arr[arr.length - 1]

  if (rtn > Math.pow(2, 31)) {
    return 0
  }
  return rtn * flag

};