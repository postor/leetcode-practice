/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function (times, N, K) {
  let dic = new Map,
    // sentFlags = new Array(N + 1).fill(false), // has queued or walked this node?
    sentTimes = new Array(N + 1).fill(-1), // time of this node
    q = [K]
  for (let [x, y, t] of times) {
    if (!dic.has(x)) dic.set(x, new Map)
    dic.get(x).set(y, t)
  }

  // sentFlags[0] = sentFlags[K] = true
  sentTimes[0] = sentTimes[K] = 0

  while (q.length) {
    let x = q.shift()
    if (!dic.has(x)) continue

    for (let [y, time] of dic.get(x).entries()) {
      let t1 = time + sentTimes[x]
      if (sentTimes[y] == -1 || t1 < sentTimes[y]) {
        sentTimes[y] = t1
        q.push(y)
      }
    }
  }
  if (sentTimes.some(x => x == -1)) return -1
  return sentTimes.reduce((a, b) => Math.max(a, b))
};

// console.log(networkDelayTime([[1, 2, 1]], 2, 2))
// console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2))
