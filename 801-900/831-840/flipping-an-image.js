/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function (image) {
  return image.map(x => x.map((y, j) => x[x.length - 1 - j] ? 0 : 1))
};