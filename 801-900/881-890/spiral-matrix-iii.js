/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  /**
   * 关键点 = 4个角(tl, tr, br, bl)
   * 
   * 第一圈 tl=（rStart, cStart） tr=(rStart, cStart+1) br=(rStart+1, cStart+1) bl=(rStart+1, cStart+1-2)
   *  [  ()       (i,j)     (i,j+1)     ()   ]
   *  [  (i+1,j)  ()        (i+1,j+1)       ]  
   * 
   * 其他圈 tl1=[tl.row-1,tl.col-1] tr1=(tr.row-1,tr.col+1) br1=(br.row+1,br.col+1) bl1=(bl.row+1,bl.col-1)
   * 
   *  [     tl1                    tr1              ]   
   *  [              tl     tr                      ]
   *  [     bl              br                      ]  
   *  [ bl1                        br1              ]
   */

  let tl = [rStart, cStart], tr = [rStart, cStart + 1], br = [rStart + 1, cStart + 1], bl = [rStart + 1, cStart + 1 - 2]
  let rtn = [tl] // 结果集加入起始点，其他段统一不计起始点
  const total = rows * cols // break 条件，已经把所有点填满
  while (rtn.length < total) {
    // 可优化，1整行忽略 
    // 例如 if row<0 


    // 可优化，2区间取最大最小避免额外的判断
    // for(let j= Math.Max(0,tl[1] + 1)。。。)
    
    // 从 tl 到 tr
    for (let j = tl[1] + 1; j <= tr[1]; j++) {
      addPoint(tl[0], j)
    }
    // tl变化
    tl = [tl[0] - 1, tl[1] - 1]

    // 从 tr 到 br
    for (let i = tr[0] + 1; i <= br[0]; i++) {
      addPoint(i, tr[1])
    }
    // tl变化
    tr = [tr[0] - 1, tr[1] + 1]

    // 从 br 到 bl
    for (let j = br[1] - 1; j >= bl[1]; j--) {
      addPoint(br[0], j)
    }
    // br变化
    br = [br[0] + 1, br[1] + 1]

    // 从 bl 到 tl
    for (let i = bl[0] - 1; i >= tl[0]; i--) {
      addPoint(i, bl[1])
    }
    // bl变化
    bl = [bl[0] + 1, bl[1] - 1]
    console.log(rtn.join('|'))
  }
  return rtn

  function addPoint(i, j) {
    if (i < 0 || i >= rows || j < 0 || j >= cols) return
    rtn.push([i, j])
  }
};

// console.log(spiralMatrixIII(1, 4, 0, 0).join('|')) // [[0,0],[0,1],[0,2],[0,3]]

console.log(spiralMatrixIII(5, 6, 1, 4).join('|')) // [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]