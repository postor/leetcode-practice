/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  let arr = [...dominoes]

  for (let [start, end] of group()) {
    dealGroup(start, end)
  }

  return arr.join('')

  function dealGroup(start, end) {
    let startForce = arr[start - 1] === 'R', endForce = arr[end + 1] === 'L'
    if (startForce && endForce) {
      for (let i = start, j = end; i < j; i++, j--) {
        arr[i]='R'
        arr[j]='L'
      }
    } else if (startForce) {
      for(let i=start;i<=end;i++){
        arr[i] = 'R'
      }
    } else if (endForce) {      
      for(let i=start;i<=end;i++){
        arr[i] = 'L'
      }
    }
  }

  function group() {
    let start = -1, igroup = []
    for (let i = 0; i < dominoes.length; i++) {
      if (start == -1) {
        if (arr[i] == '.') {
          start = i
        }
      } else {
        if (arr[i] !== '.') {
          igroup.push([start, i - 1])
          start = -1
        }
      }
    }
    if (start != -1) igroup.push([start, arr.length - 1])
    return igroup
  }
};

// console.log(pushDominoes("RR.L")) //"RR.L"
console.log(pushDominoes(".L.R...LR..L..")) //"LL.RR.LLRRLL.."