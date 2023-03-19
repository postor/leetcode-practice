/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  /**
   *  基本思路：分组
   * 
   *  参数 4, [[1, 2], [1, 3], [2, 4]] 为例分析
   *  [1,2]  =>  a={1} b={2} a与b有链接， 链接表示两组相互排斥
   *  [1,3]  =>  a={1} b={2} c={3}  a与b有链接   a与c 有链接
   *             因为目标只分两个组  a={1} b={2,3}   a与b有链接  
   *  [2,4]  =>  a={1} b={2,3} d={4} a与b有链接   b与d 有链接
   *             因为目标只分两个组  a={1,4} b={2,3}   a与b有链接  
   *             返回 true
   * 
   *  参数 3, [[1, 2], [1, 3], [2, 3]] 为例分析
   *  [1,2]  =>  a={1} b={2} a与b有链接   
   *  [1,3]  =>  a={1} b={2} c={3}  a与b有链接   a与c 有链接
   *             因为目标只分两个组  a={1} b={2,3}   a与b有链接  
   *  [2,3]  =>  a={1} b={2,3}， 已经在 b 组中的 2 和 3 相互排斥，所以至少要 组才能不排斥
   *             返回 false
   *  
   *  参数 6, [[1, 2], [1, 3], [5, 6]] 为例分析
   *  [1,2]  =>  a={1} b={2} a与b有链接， 链接表示两组相互排斥
   *  [1,3]  =>  a={1} b={2} c={3}  a与b有链接   a与c 有链接
   *             因为目标只分两个组  a={1} b={2,3}   a与b有链接 
   *  [5,6]  =>  a={1} b={2,3} d={5} e={6}  a与b有链接   d与e 有链接
   *             从图逻辑来讲是两个非链接的图，各自里面没冲突即可
   *             从事实逻辑来讲，这种情况 5 和 6 随便选一个放到 a 这边，另一个去 b 就可以了，总是可以分的也就不用算了
   * 
   * */

  // let sets = new Map
  // a={1} b={2} | {a:[b],b:[a]} | 最多有两个分组就可以不用数组了 {a:b,b:a}

  /** @type {Map<number,number>} */
  let person2group = new Map
  /**  @type {Map<number,Set<number>>} */
  let group2persion = new Map
  /** @type {Map<number,number>} */
  let groupDislike = new Map

  for (let [p1, p2] of dislikes) {

    // if(p1==3 &&p2==7) debugger
    if (person2group.has(p1)) {
      let g1 = person2group.get(p1)
      if (person2group.has(p2)) {
        // 两个人都出现过，可能提前终止，或需要合并 
        let g2 = person2group.get(p2)
        if (g1 === g2) {
          return false
        }
        if (groupDislike.get(g1) === g2) {
          // debugger
          // continue
        } else {
          // 合并
          let g11 = groupDislike.get(g1), g22 = groupDislike.get(g2)
          mergeGroup(g1, g22)
          mergeGroup(g2, g11)
          //合并成功
          // continue
        }
      } else {
        // 只出现过一个
        addToGroup(groupDislike.get(g1), p2)
        // continue
      }
    } else if (person2group.has(p2)) {
      // 只出现过一个
      addToGroup(groupDislike.get(person2group.get(p2)), p1)
    } else {
      // 都没出现过
      addToGroup(p1, p1)
      addToGroup(p2, p2)
      groupDislike.set(p1, p2)
      groupDislike.set(p2, p1)
    }

    // printCurrentStatus()
    // let abc=1
  }

  return true

  function printCurrentStatus() {
    let table = []
    for (let [g1, g2] of groupDislike.entries()) {
      table.push([[...group2persion.get(g1)].join(','), [...group2persion.get(g2)].join(',')])
    }
    console.table(table)
  }


  function addToGroup(group, persion) {
    if (!group2persion.has(group)) group2persion.set(group, new Set)
    group2persion.get(group).add(persion)
    person2group.set(persion, group)
  }

  function mergeGroup(a, b) {
    if (a == b) return
    if (!group2persion.get(a) || !group2persion.get(b)) return
    if (a > b) return mergeGroup(b, a) // 总是合并到较小的组

    for (let persion of group2persion.get(b)) {
      addToGroup(a, persion)
    }
    group2persion.delete(b)
    groupDislike.set(groupDislike.get(b), a)
    groupDislike.set(a, groupDislike.get(b))
    groupDislike.delete(b)
  }

}

console.log(possibleBipartition(4, [[1, 2], [1, 3], [2, 4]])) // true
console.log(possibleBipartition(3, [[1, 2], [1, 3], [2, 3]])) // false

console.log(possibleBipartition(10, [[1, 2], [3, 4], [5, 6], [6, 7], [8, 9], [7, 8]])) //true
// {1:{2},2:{1},3:{4},4:{3},5:{5},6:{5}}
// {1:{2},2:{1},3:{4},4:{3},5:{5,7},6:{5}}
// {1:{2},2:{1},3:{4},4:{3},5:{5,7},6:{5},8:{9},9:{8}} g8-g9 g5-g6
// {1:{2},2:{1},3:{4},4:{3},5:{5,7},6:{5},8:{9},9:{8}} 7,8 g5

// true
console.log(possibleBipartition(10, [[4, 7], [4, 8], [5, 6], [1, 6], [3, 7], [2, 5], [5, 8], [1, 2], [4, 9], [6, 10], [8, 10], [3, 6], [2, 10], [9, 10], [3, 9], [2, 3], [1, 9], [4, 6], [5, 7], [3, 8], [1, 8], [1, 7], [2, 4]]))
// 4,3|7,8     5,1|6,2
// 4,3,5,1,10|7,8,6,2,9

console.log(possibleBipartition(10, [[4, 7], [4, 8], [5, 6], [1, 6], [3, 7], [2, 5], [5, 8], [1, 2], [4, 9], [6, 10], [8, 10], [3, 6], [2, 10], [9, 10], [3, 9], [2, 3], [1, 9], [4, 6], [5, 7], [3, 8], [1, 8], [1, 7], [2, 4]]
)) // true


console.log(possibleBipartition(10, [[4, 7], [4, 8], [2, 8], [8, 9], [1, 6], [5, 8], [1, 2], [6, 7], [3, 10], [8, 10], [1, 5], [7, 10], [1, 10], [3, 5], [3, 6], [1, 4], [3, 9], [2, 3], [1, 9], [7, 9]
  , [2, 7], [6, 8], [5, 7], [3, 4]]
)) // true
// 4,2|7,8