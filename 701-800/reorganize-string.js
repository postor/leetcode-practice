/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
  let arr = [...toDic(S).entries()]
  arr.sort((a, b) => b[1] - a[1])
  if (2 * arr[0][1] - 1 > S.length) return ''
  let rtn = new Array(S.length), it = getNext(arr)
  for (let i = 0; i < S.length; i += 2) rtn[i] = it.next().value
  for (let i = 1; i < S.length; i += 2) rtn[i] = it.next().value
  return rtn.join('')

  function toDic(S) {
    let dic = new Map
    for (let char of S) {
      dic.set(char, dic.has(char) ? dic.get(char) + 1 : 1)
    }
    return dic
  }

  function* getNext(arr = []) {
    for (let [char, count] of arr) {
      for (let i = 0; i < count; i++) yield char
    }
  }
};

console.log(reorganizeString('aab'))