/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  let w = Math.floor(Math.sqrt(area))
  while (true) {
    if (area % w) {
      w--
      continue
    }
    return [area / w, w]
  }
};