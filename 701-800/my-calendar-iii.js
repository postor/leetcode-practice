class RangeEvent {
  constructor(left, right) {
    this.left = left
    this.right = right
  }
}

class CalenderEvent extends RangeEvent {
  /**
   * 
   * @param {number} left 
   * @param {number} right 
   * @param {CalenderEvent} prev 
   * @param {CalenderEvent} next 
   */
  constructor(left, right, prev, next) {
    super(left, right)
    this.prev = prev
    this.next = next
    prev && (prev.next = this)
    next && (next.prev = this)
  }

  destruct() {
    this.next = this.prev = null
  }
}



class Bookings {
  constructor() {
    this.start = new CalenderEvent()
    this.end = new CalenderEvent()
    this.start.next = this.end
    this.end.prev = this.start
  }

  /**
   * 
   * @param {*} start 
   * @param {*} end
   * @returns {RangeEvent[]} 
   */
  add(start, end) {
    let t = this.start.next
    // empty
    if (t == this.end) {
      new CalenderEvent(start, end, this.start, this.end)
      return []
    }
    // before first event
    if (t.left >= end) {
      new CalenderEvent(start, end, this.start, t)
      return []
    }
    // between events
    while (t.next != this.end) {
      if (t.right <= start && end <= t.next.left) {
        new CalenderEvent(start, end, t, t.next)
        return []
      }
      t = t.next
    }
    // after last event
    if (t.right <= start) {
      new CalenderEvent(start, end, t, t.next)
      return []
    }

    // double booking
    t = this.start.next
    let startI = null, toRemove = []
    while (t != this.end) {
      if (start <= t.right && startI == null) startI = t
      if (end <= t.right) {
        if (end < t.left) {
          if (startI == t) toRemove.push(t)
          new CalenderEvent(Math.min(startI.left, start), Math.max(t.prev.right, end), startI.prev, t)
        } else {
          toRemove.push(t)
          new CalenderEvent(Math.min(startI.left, start), t.right, startI.prev, t.next)
        }
        return this.getOverLaps(start, end, toRemove)
      }
      if (startI != null) toRemove.push(t)
      t = t.next
    }
    // if (startI == null) debugger
    new CalenderEvent(Math.min(startI.left, start), end, startI.prev, this.end)
    return this.getOverLaps(start, end, toRemove)
  }

  getOverLaps(start, end, toRemoves) {
    let rtn = []
    if (toRemoves.length == 1) {
      rtn.push(new RangeEvent(Math.max(start, toRemoves[0].left), Math.min(end, toRemoves[0].right)))
      toRemoves[0].destruct()
      freeEvents(toRemoves)
      return rtn.filter(x => x.left != x.right)
    }
    rtn.push(new RangeEvent(Math.max(start, toRemoves[0].left), toRemoves[0].right))
    rtn.push(new RangeEvent(toRemoves[toRemoves.length - 1].left
      , Math.min(end, toRemoves[toRemoves.length - 1].right)))

    for (let i = 1; i < toRemoves.length - 1; i++) {
      rtn.push(new RangeEvent(toRemoves[i].left, toRemoves[i].right))
    }
    freeEvents(toRemoves)
    return rtn.filter(x => x.left != x.right)
  }
}

function freeEvents(arr = [new CalenderEvent()]) {
  arr.forEach(x => x.destruct())
}


var MyCalendarThree = function () {
  this.bookings = [new Bookings()]
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function (start, end) {
  let i = 0, nextRanges = [new RangeEvent(start, end)]
  while (true) {
    if (!this.bookings[i]) this.bookings[i] = new Bookings()
    let t = []
    for (let { left, right } of nextRanges) {
      t = t.concat(this.bookings[i].add(left, right))
    }
    if (!t.length) return this.bookings.length
    nextRanges = t
    i++
  }
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */

let opts = ["MyCalendarTwo", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book"]
let params = [[], [28, 46], [9, 21], [21, 39], [37, 48], [38, 50], [22, 39], [45, 50], [1, 12], [40, 50], [31, 44]]
let expects = [null, true, true, true, false, false, false, true, true, false, false]
var obj = new MyCalendarThree();
for (let i = 1; i < opts.length; i++) {
  let rtn = obj[opts[i]](...params[i])
  console.log(i, opts[i], params[i], rtn, expects[i])
  // obj.print()
}