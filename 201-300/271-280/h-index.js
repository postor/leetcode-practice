/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let h = citations.length
  while (h >= 0) {
    if (tryx(h)) return h
    h--
  }
  return -1

  function tryx(x) {
    let less = 0, eq = 0, more = 0
    citations.forEach(y => {
      if (x == y) {
        eq++
      } else if (x > y) {
        less++
      } else {
        more++
      }
    })
    if (more + eq >= x) return true
    return false
  }
};

console.log(hIndex([3,0,6,1,5]))