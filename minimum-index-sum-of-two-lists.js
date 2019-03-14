/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const lists = [list1, list2]
  let indexes = [0, 0], toIncrease = 0, curSum = Number.MAX_SAFE_INTEGER, curCommon = []
  if (list1[0] == list2[0]) {
    return [list1[0]]
  }
  while (true) {
    const otherSide = toIncrease ? 0 : 1
    indexes[toIncrease]++
    if (indexes[toIncrease] > curSum) {
      break
    }
    const dinner = lists[toIncrease][indexes[toIncrease]]
    const indexOtherSide = lists[otherSide].indexOf(dinner)
    if (indexOtherSide >= 0) {
      //找到共同兴趣点
      const newSum = indexes[toIncrease] + indexOtherSide
      if (newSum === curSum) {
        if (!curCommon.includes(dinner)) {
          curCommon.push(dinner)
        }
      } else if (newSum < curSum) {
        curSum = newSum
        curCommon = [dinner]
      }
    }
    toIncrease = otherSide
  }
  return curCommon
};

console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]))