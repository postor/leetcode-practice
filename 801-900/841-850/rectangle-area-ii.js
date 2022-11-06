/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function (rectangles) {

  class Range {
    constructor(start, end) {
      this.start = start
      this.end = end
      /**
       * @type {Range[]}
       */
      this.bottomTops = []
    }

    copy2Range(start, end) {
      let rtn = new Range(start, end)
      rtn.bottomTops = this.bottomTops.map(({ start, end }) => new Range(start, end))
      return rtn
    }
  }

  /**
   * devide areas into ranges based on x
   * boxes [[0,0,2,2],[1,0,3,1]] to ranges is [{x:[0,1],y:[0,2]},{x:[1,2],y:[0,2]},{x:[2,3],y:[0,1]}] 
   * and for the second part {x:[1,2],y:[0,2]} in Range type is {start:1,end:2,bottomTops:[{start:0,end:2},{start:0,end:1}]}
   * @type {Range[]}
   */
  let ranges = []

  // if not bigint calculation will not accurate and fail
  let rtn = BigInt(0)

  // edge case
  if (!rectangles.length) return rtn
  
  // sort boxes by left side
  rectangles.sort(([a], [b]) => a - b)
  
  // convert each box to range
  for (let [x1, y1, x2, y2] of rectangles) {
    // calc all full ranges before this box, because sorted so I'm sure ranges before won't change any more 
    while (ranges.length && ranges[0].end <= x1) {
      AddArea(ranges.shift())
    }

    // ranges initally empty, and when this box is total after all ranges(all shifted, check upper line)
    // just convert box 
    if (!ranges.length) {
      let range = new Range(x1, x2)
      range.bottomTops = [new Range(y1, y2)]
      ranges.push(range)
      last = 0
      continue
    }

    // current box will cross ranges
    let first = ranges[0]
    if (x1 != first.start) {
      // current box and range doest share left
      // calc area before box left, and make first range start from box left
      AddArea(first.copy2Range(first.start, x1))
      first.start = x1
    }

    // before box.right cross some range, just add [box.bottom,box.top] to range's y
    for (let i = 0; i < ranges.length; i++) {
      let r = ranges[i]
      if (x2 <= r.start) break
      if (x2 >= r.end) {
        r.bottomTops.push(new Range(y1, y2))
        continue
      }
      ranges[i] = r.copy2Range(r.start, x2)
      ranges[i].bottomTops.push(new Range(y1, y2))
      r.start = x2
      ranges.splice(i + 1, 0, r)
    }

    // if box.right larger than right most of current range
    // add new range form right most to box.right
    let lastRange = ranges[ranges.length - 1]
    if (x2 > lastRange.end) {
      let r = new Range(lastRange.end, x2)
      r.bottomTops.push(new Range(y1, y2))
      ranges.push(r)
    }
  }

  // add all area not handled
  for (let r of ranges) {
    AddArea(r)
  }

  return rtn

  /**
   * calc area of range and add to rtn
   * @param {Range} range 
   */
  function AddArea(range) {
    let { start, end, bottomTops } = range
    let x = mod(BigInt(end) - BigInt(start))
    
    // sort by bottom
    bottomTops.sort(({ start: a }, { start: b }) => a - b)
    /**
     * @type {Range}
     */
    let cur
    for (let range of bottomTops) {
      // add last range if no overlap
      if (cur && cur.end < range.start) {
        rtn = mod(rtn + mod(mod(BigInt(cur.end) - BigInt(cur.start)) * x))
        cur = undefined
      }
      if (!cur) {
        // if handled or initial, set cur
        cur = range
      } else {
        // if not handled, that means overlap, so new top is rang.top
        cur.end = Math.max(cur.end, range.end)
      }
    }
    // calc area of last range
    rtn = mod(rtn + mod(mod(BigInt(cur.end) - BigInt(cur.start)) * x))
  }
  
  function mod(x) {
    return x % BigInt(1000000007)
  }
};

// console.log(rectangleArea([[0, 0, 2, 2], [1, 0, 2, 3], [1, 0, 3, 1]])) // 6
// console.log(rectangleArea([[49,40,62,100],[11,83,31,99],[19,39,30,99]])) // 1584

// console.log(rectangleArea([[0,0,1000000000,1000000000]])) // 49
//862275791
// console.log(rectangleArea([[224386961, 128668997, 546647847, 318900555], [852286866, 238086790, 992627088, 949888275], [160239672, 137108804, 398130330, 944807066], [431047948, 462092719, 870611028, 856851714], [736895365, 511285772, 906155231, 721626624], [289309389, 607009433, 558359552, 883664714], [780746435, 397872372, 931219192, 863727103], [573523994, 124874359, 889018012, 471879750], [619886375, 149607927, 727026507, 446976526], [51739879, 716225241, 115331335, 785850603], [171077223, 267051983, 548436248, 349498903], [314437215, 169054168, 950814572, 481179241], [64126215, 646689712, 595562376, 829164135], [926011655, 481539702, 982179297, 832455610], [40370235, 231510218, 770233582, 851797196], [292546319, 45032676, 413358795, 783606009], [424366277, 369838051, 453541063, 777456024], [211837048, 142665527, 217366958, 952362711], [228416869, 402115549, 672143142, 644930626], [755018294, 194555696, 846854520, 939022548], [192890972, 586071668, 992336688, 759060552], [127869582, 392855032, 338983665, 954245205], [665603955, 208757599, 767586006, 276627875], [260384651, 10960359, 736299693, 761411808], [46440611, 559601039, 911666265, 904518674], [54013763, 90331595, 332153447, 106222561], [73093292, 378586103, 423488105, 826750366], [327100855, 516514806, 676134763, 653520887], [930781786, 407609872, 960671631, 510621750], [35479655, 449171431, 931212840, 617916927]])) // 49
