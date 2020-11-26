/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let scores = []
  for (let op of ops) {
    switch (op) {
      case '+': {
        scores.push(scores[scores.length - 1] + scores[scores.length - 2])
      }
        break;
      case 'D': {
        scores.push(scores[scores.length - 1] * 2)
      }
        break;
      case 'C': {
        scores.pop()
      }
        break;
      default: {
        scores.push(parseInt(op))
      }
    }
    // console.log(scores.join(','))
  }
  return scores.reduce((a, b) => a + b)
};

// console.log(calPoints(["5", "2", "C", "D", "+"]))

// console.log(calPoints(["5","-2","4","C","D","9","+","+"]))