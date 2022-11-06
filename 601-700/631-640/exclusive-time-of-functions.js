/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  let rtn = new Array(n).fill(0), stack = []

  for (let str of logs) {
    let [idstr, opstr, timestr] = str.split(':')

    let id = parseInt(idstr), time = parseInt(timestr)
    if (opstr === 'start') {
      // remember when it starts
      stack.push([id, time, 0])
      continue
    }
    //opstr==='end'
    let [id1, time1, others] = stack.pop()
    let duration = time - time1 + 1
    // time used by other function inside this function
    rtn[id] += duration - others
    // this duration is not used by parent function
    if (stack.length) {
      stack[stack.length - 1][2] += duration
    }
  }
  return rtn
};

console.log(exclusiveTime(1, ["0:start:0", "0:start:2", "0:end:5", "0:start:6", "0:end:6", "0:end:7"]))
console.log(exclusiveTime(2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"]))