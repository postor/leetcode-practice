/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function (board, hand) {
  const COUNT_DISAPPEAR = 3
  let handDic = getHandDic()
  let groups = getBoardGroups()

  let min = Infinity
  r(groups, handDic, 0)
  return min == Infinity ? -1 : min

  function r(arr = [], dic, steps = 0) {
    if (steps >= min) {
      return
    }
    for (let i = 0; i < arr.length; i++) {
      // 消除 i
      let dic1 = { ...dic }
      let { color, count } = arr[i]
      let needCount = COUNT_DISAPPEAR - count
      if (!dic1[color] || dic1[color] < needCount) {
        // 手里的球不够
        continue
      }
      let steps1 = steps + needCount
      if (steps1 >= min) {
        continue
      }

      dic1[color] -= needCount
      let arr1 = arr.slice(0, i).concat(arr.slice(i + 1))
      while (true) {
        // 循环消除，因为消除后可能产生新的消除
        let arr2 = autoDisappear(arr1)
        if (arr2 == arr1) break
        arr1 = arr2
      }
      if (!arr1.length) {
        // 已经消除干净
        min = steps1
        continue
      }
      r(arr1, dic1, steps1)
    }
  }

  function autoDisappear(arr = []) {
    let found = false
    if (!arr.length) return arr
    let { color, count } = arr[0], rtn = []
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].color == color) {
        count += arr[i].count
        found = true
        continue
      }
      if (count >= COUNT_DISAPPEAR) {
        count = arr[i].count
        color = arr[i].color
        continue
      }
      rtn.push(new BallGroup(color, count))
      count = arr[i].count
      color = arr[i].color
    }
    if (count < COUNT_DISAPPEAR) {
      rtn.push(new BallGroup(color, count))
    } else {
      found = true
    }
    return found ? rtn : arr
  }


  function getHandDic() {
    let dic = {}
    for (let i = 0; i < hand.length; i++) {
      dic[hand[i]] = (dic[hand[i]] || 0) + 1
    }
    return dic
  }

  function getBoardGroups() {
    let groups = [], color = board[0], count = 0
    for (let i = 0; i < board.length; i++) {
      if (board[i] == color) {
        count++
        continue
      }
      groups.push(new BallGroup(color, count))
      color = board[i]
      count = 1
    }
    groups.push(new BallGroup(color, count))
    return groups
  }

  function BallGroup(color, count) {
    this.color = color
    this.count = count
  }
};


// console.log(findMinStep("WRRBBW", "RB"))
// console.log(findMinStep("WWRRBBWW", "WRBRW"))
// console.log(findMinStep("RBYYBBRRB", "YRBGB"))
// console.log(findMinStep("WWGWGW", "GWBWR"))