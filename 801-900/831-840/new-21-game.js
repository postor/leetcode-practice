/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function (n, k, maxPts) {

  // cardsPoints[cardCount][point]=possibility
  let cardsPoints = [row(), row()]
  cardsPoints[0][0] = 1 // no card, no point, 1 possibility, initial state

  // add cards
  for (let points = 0; points < k; points++) {
    for (let cardCount = 0; cardCount < cardsPoints.length; cardCount++) {
      let possibility = cardsPoints[cardCount][points]
      if (!possibility) continue

      for (let p = 1; p <= maxPts; p++) {
        addPossibility(cardCount + 1, points + p, possibility)
      }
    }
  }

  console.table(cardsPoints)

  // calc possibility
  let total = 0, nLess = 0
  for (let cardCount = 1; cardCount < cardsPoints.length; cardCount++) {
    let row = cardsPoints[cardCount]
    for (let i = k; i < row.length; i++) {
      total += row[i]
      if (i <= n) nLess += row[i]
    }
  }
  return nLess / total


  function addPossibility(cardCount, points, possibility) {
    while (cardsPoints.length <= cardCount) cardsPoints.push(row())
    cardsPoints[cardCount][points] += possibility
  }


  function row() {
    return new Array(k + maxPts).fill(0)
  }

};

// console.log(new21Game(6, 1, 10)) //0.6
console.log(new21Game(21, 17, 10)) //0.73278