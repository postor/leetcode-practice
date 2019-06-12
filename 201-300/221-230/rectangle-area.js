/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
  // 不相关
  if (G <= A || E >= C || D <= F || B >= H) {
    return area(A, B, C, D) + area(E, F, G, H)
  }

  // 在另一个里
  if (A <= E && C >= G && B <= F && D >= H) {
    return area(A, B, C, D)
  }
  if (A >= E && C <= G && B >= F && D <= H) {
    return area(E, F, G, H)
  }

  // 交叉，减去重叠部分
  let w = A < E
    // A左
    ? C < G
      ? C - E
      : G - E
    // E左
    : G < C
      ? G - A
      : C - A

  let h = B < F
    ? D < H
      ? D - F
      : H - F
    // E左
    : H < D
      ? H - B
      : D - B

  return area(A, B, C, D) + area(E, F, G, H) - w * h


  function area(a, b, c, d) {
    return (c - a) * (d - b)
  }
};


// console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2))
// console.log(computeArea(0, 0, 0, 0, -1, -1, 1, 1))