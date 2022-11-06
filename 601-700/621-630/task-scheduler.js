/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  // we can re-order, so suppose we just group each task and in every loop take one from each group
  // e.g. ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"]
  let dic = {}
  for (let t of tasks) {
    dic[t] = (dic[t] || 0) + 1
  }
  // we got dic A:6 B:1 C:1 D:1 E:1 F:1 G:1, we dont care wich task so use array and sort
  let arr = Object.keys(dic).map(k => dic[k]), totalIdles = 0, dealedMax = 0, lastIdles = 0
  arr.sort((a, b) => b - a)
  // we got arr 6,1,1,1,1,1,1
  while (arr.length) {
    // we dont loop for each task, we start from the least one (G) and group
    // this group would like 1,1,1,1,1,1,1 and we have dic[G] count of the same groups
    // in next loop, after we take these task it shold be 5,0,0,0,0,0,0 here use dealedMax to delay the calculation
    let singleLoop = arr.length, cur = arr.pop(), loopCount = cur - dealedMax
    dealedMax = cur
    if (!loopCount) {
      // this means this task has the same number with tasks done before
      continue
    }
    if (singleLoop > n) {
      // the ones more than one cool down can be used to replace idles, so it's negative
      totalIdles -= (singleLoop - n - 1) * loopCount
      continue
    }
    // you need to use idle to cool down, as said before, there are tasks can fit the idle 
    lastIdles = (n + 1 - singleLoop)
    totalIdles += lastIdles * loopCount
  }
  // the last idles in last loop, we need them not
  totalIdles -= lastIdles
  return totalIdles > 0 ? tasks.length + totalIdles : tasks.length
};

// console.log(leastInterval(["A", "A", "A", "B", "B", "B"]
//   , 2))

// console.log(leastInterval(["A", "A", "A", "B", "B", "B"]
//   , 0))

console.log(leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"]
  , 2))