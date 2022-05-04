/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let keys = new Set(rooms[0]), visited = new Set([0])
  while (keys.size) {
    let tKeys = new Set
    for (let k of keys) {
      if (visited.has(k)) continue
      visited.add(k)
      if (visited.size == rooms.length) return true
      for (let x of rooms[k]) tKeys.add(x)
    }
    keys = tKeys
  }
  return false
};

console.log(canVisitAllRooms([[1],[2],[3],[]]))