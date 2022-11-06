/**
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function (p, q) {
  // because it's mirror, we can suppose top mirror is not there 
  // each reflect, y go up by q (reflect by top and bottom mirror is ignored)
  // that means how many q do we need to get the same hight of some p

  let commons = 1, curCommon = 2
  if ((p % q) == 0) {
    commons = q
  } else {
    let p1 = p, q1 = q
    while (curCommon <= q1 / 2) {
      if ((q1 % curCommon) == 0 && (p1 % curCommon) == 0) {
        commons *= curCommon
        q1 /= curCommon
        p1 /= curCommon
        continue
      }
      curCommon++
    }
  }

  // total height = totalPs*p
  let totalPs = q / commons
  if(totalPs%2){
    // top

    // totalX/p = totalHeight/q = totalPs*p/q = p/commons
    let xpCount = p/commons
    if(xpCount%2){
      return 1
    }else{
      return 2
    }
  }else{
    // bottom
    return 0
  }


};

// console.log(mirrorReflection(2, 1)) // 2
// console.log(mirrorReflection(3, 1)) // 1
// console.log(mirrorReflection(4, 4)) // 1 
// console.log(mirrorReflection(15, 10)) // 0 
// console.log(mirrorReflection(620, 612)) // 1