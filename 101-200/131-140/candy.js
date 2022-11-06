/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let ca = ratings.map(x => 1)
  let c = ratings.length
  while (true) {
    let n = needMore()
    if (!n) break
    c += n
  }
  console.log(ca.join(','))
  return c

  function needMore() {
    let needed = 0

    for (let i = 0; i < ratings.length - 1; i++) {
      if (ratings[i] > ratings[i + 1]) {
        more(i, ca[i + 1])
      }
    }
    for (let i = 1; i < ratings.length; i++) {
      if (ratings[i] > ratings[i - 1]) {
        more(i, ca[i - 1])
      }
    }


    return needed
    function more(i, than) {
      if (ca[i] > than) return
      let target = than + 1
      needed += target - ca[i]
      ca[i] = target
    }
  }
};

// console.log(candy([1, 0, 2]))