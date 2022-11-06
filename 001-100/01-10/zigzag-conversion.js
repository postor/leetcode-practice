/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  var arrs = Array(numRows).fill([], 0, numRows).map(_=>[])
  let iterator = s[Symbol.iterator]();

  outer:
  while (true) {
    var t1 = ''
    for (let i = 0; i < numRows; i++) {
      const { value, done } = iterator.next()
      if (done) {
        break outer;
      }
      arrs[i].push(value)
      t1 = t1 + value
    }
    //console.log(t1)
    var t2 = ''
    for (let j = numRows - 2; j > 0; j--) {
      const { value, done } = iterator.next()
      if (done) {
        break outer;
      }
      for (let k = 0; k < numRows; k++) {
        if (k == j) {
          arrs[j].push(value)
          t2 += value
        } else {
          arrs[j].push(undefined)
          t2 += ' '
        }
      }
    }
    //console.log(t2)
  }

  //arrs.forEach(console.log)
  return arrs.reduce((acc, val) => {
    return acc.concat(val.filter(x => x !== undefined))
  }, []).join('');
};


console.log(convert("PAYPALISHIRING", 3))