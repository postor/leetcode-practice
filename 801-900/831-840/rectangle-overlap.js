/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  let [l1, b1, r1, t1] = rec1
  let [l2, b2, r2, t2] = rec2
  let xoverlap = !(l2 >= r1 || r2 <= l1)
  let yoverlap = !(b2 >= t1 || t2 <= b1)
  return xoverlap && yoverlap
};