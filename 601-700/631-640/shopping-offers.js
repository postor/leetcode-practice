

/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function (price, special, needs) {
  // dp[countA][countB]...[countN] = min total price
  let dp = initDP(), oneBuy = special
    .map(x => [permulateOrder(x), x[x.length - 1]])
    .concat(price.map((p, item) => {
      let t = new Array(price.length).fill(0)
      t[item] = 1
      return [[t], p]
    }))
  let current = new Array(price.length).fill(0), bst = new BST(0, current)
  // you buy nothing, need no money
  setDp(current, 0)
  tryBuy(current)
  // loop every cell of dp 
  for (let c = 1; c <= Math.max(...needs); c++) {
    for (let i = 0; i < needs.length; i++) {
      if (c > needs[i]) continue
      current[i] = c
      tryBuy(current)
    }
  }
  let rtn = getDp(current)
  return rtn

  function tryBuy(arr) {
    let curMoney = getDp(arr)
    for (let [permulates, price] of oneBuy) {
      let m = curMoney + price
      for (let arr1 of permulates) {
        setDp(arr.map((x, i) => x + arr1[i]), m)
      }
    }
  }

  function permulateOrder(order) {
    let rtn = [new Array(price.length).fill(0)]
    for (let i = 0; i < order.length - 1; i++) {
      let t = []
      for (let j = 0; j <= order[i]; j++) {
        let t1 = rtn.map(x => {
          let y = x.concat()
          y[i] += j
          return y
        })
        t = t.concat(t1)
      }
      rtn = t
    }
    rtn.shift()
    return rtn
  }

  function setDp(arr, money) {
    let t = dp
    for (let i = 0; i < arr.length - 1; i++) {
      t = t[arr[i]]
      if (t === undefined) return
    }
    if (!t[arr[arr.length - 1]] === undefined) return
    t[arr[arr.length - 1]] = Math.min(money, t[arr[arr.length - 1]])
  }
  function getDp(arr) {
    let t = dp
    for (let n of arr) {
      t = t[n]
    }
    return t
  }

  function initDP() {
    let tmpfn = () => Number.MAX_SAFE_INTEGER
    for (let i = needs.length - 1; i >= 0; i--) {
      let t1 = needs[i], t2 = tmpfn
      tmpfn = () => new Array(t1 + 1).fill(0).map(t2)
    }
    return tmpfn()
  }
};

console.log(shoppingOffers([2, 3, 4]
  , [[1, 1, 0, 4], [2, 2, 1, 9]]
  , [1, 2, 1]))