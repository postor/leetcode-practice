/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
var findMinStep = function (board, hand) {
  let handDic = getHandDic()
  let groups = getBoardGroups()

  let min = -1
  function r(arr, dic) {
    
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