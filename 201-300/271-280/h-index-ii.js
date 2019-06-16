/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let h = citations.length
  if (citations[0] >= h) return h

  while (h > 0) {
    h--
    let moreI = citations.length - h
    let lessI = moreI - 1
    if (citations[lessI] <= h && citations[moreI] >= h) return h
  }
  return h
};

console.log(hIndex([0, 1, 3, 5, 6]))