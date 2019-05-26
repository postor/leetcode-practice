/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x
  //在两个端点间不断二分，定义端点
  let t1 = x, t2 = 0
  while (true) {
    let t = Math.floor((t1 + t2) / 2)
    //如果刚好平方为x则返回t
    let tt = t * t
    if (tt == x) return t
    //如果已经和端点相等了不再循环
    if (t == t1 || t == t2) return t
    //如果平方比x大，说明要取小的一半继续二分
    if (tt > x) {
      t1 = t
      continue
    }
    //如果平方比x小，说明要取大的一半继续二分
    t2 = t
  }
};

Array(100).fill(0).forEach((x, i) => console.log(`sqrt(${i})=${mySqrt(i)}`))