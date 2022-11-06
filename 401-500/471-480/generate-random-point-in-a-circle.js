/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function (radius, x_center, y_center) {
  this.radius = radius
  this.x_center = x_center
  this.y_center = y_center
  this.hypot2 = radius * radius
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function () {
  // draw circle/box at 0,0 (2.0001 cover top and right point, because Math.random() doesn't contain 1) 
  let x = Math.random() * 2.0001 * this.radius - this.radius
  let y = Math.random() * 2.0001 * this.radius - this.radius
  if (x * x + y * y > this.hypot2) return this.randPoint()
  return [x + this.x_center, y + this.y_center]
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */