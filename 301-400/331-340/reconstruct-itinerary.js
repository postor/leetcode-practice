/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let result = null
  r()
  return result
  function r(used = [], cur = 'JFK', path = ['JFK']) {
    let allUsed = true
    for (let i = 0; i < tickets.length; i++) {
      if (used[i]) continue
      allUsed = false
      if (tickets[i][0] != cur) continue
      let used1 = used.concat()
      used1[i] = true
      r(used1, tickets[i][1], path.concat([tickets[i][1]]))
    }
    if (allUsed) {
      if (!result) {
        result = path
        return
      }
      if (gt(result, path)) {
        result = path
        return
      }
    }
  }
  function gt(path1, path2) {
    for (let i = 0; i < path1.length; i++) {
      if (path1[i] > path2[i]) {
        return true
      }else if(path1[i] < path2[i]){
        return false
      }
    }
    return false
  }
};

// console.log(findItinerary([["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]]))
// console.log(findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]))
