/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let graph = {}
  tickets.forEach(([f, t]) => {
    if (!graph[f]) graph[f] = []
    graph[f].push(t)
  })

  Object.keys(graph).forEach(k => graph[k].length && graph[k].sort())

  let res = []
  dfs('JFK')
  return res

  function dfs(cur) {
    if (graph[cur]){
      while(graph[cur].length) {
        let smaller = graph[cur].shift()
        dfs(smaller)
      }
    }
    res.unshift(cur)
  }
};

// console.log(findItinerary([["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]))
// console.log(findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]))
