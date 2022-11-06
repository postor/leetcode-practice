/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  if (n == 1) return 1
  let left = n, it = base(), fromLeft = true
  while (true) {
    // console.log(new Array(left).fill(0).map((x, i) => it(i)).join(','))
    let start = (fromLeft || (left % 2)) ? 1 : 0
    it = getEverySecond(start, it)

    if (left % 2) {
      if (start) {
        left -= (left + 1) / 2
      } else {
        left -= (left - 1) / 2
      }
    } else {
      left /= 2
    }
    if (left == 1) return it(0)
    fromLeft = !fromLeft
  }

  function base() {
    return (i) => i + 1
  }

  function getEverySecond(start = 0, it) {
    if (start) {
      return (i) => it(2 * i + 1)
    }
    return (i) => it(2 * i)
  }
};

// console.log(lastRemaining(9))
// console.log(lastRemaining(6))