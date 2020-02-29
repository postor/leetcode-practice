function maximumProfit(price = []) {
  // Write your code here
  let total = 0, l = 0, r = price.length - 1
  while (l < r) {
    let [profits, maxIndex] = re(l, r)
    total += profits
    l = maxIndex + 1
  }
  return total

  function re(from, to) {
    let max = -1, maxIndex = 0, l = from, r = to
    for (let i = l; i <= r; i++) {
      if (price[i] > max) {
        max = price[i]
        maxIndex = i
      }
    }
    let profits = price
      .slice(l, maxIndex + 1)
      .map(x => max - x)
      .reduce((a, b) => a + b)
    return [profits, maxIndex]
  }

}

console.log(maximumProfit([3, 4, 5, 3, 5, 2]))