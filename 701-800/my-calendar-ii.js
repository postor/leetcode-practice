class CalenderEvent {
  /**
   * 
   * @param {number} left 
   * @param {number} right 
   * @param {CalenderEvent} prev 
   * @param {CalenderEvent} next 
   */
  constructor(left, right, prev, next) {
    this.left = left
    this.right = right
    this.prev = prev
    this.next = next
    prev && (prev.next = this)
    next && (next.prev = this)
  }
}

var MyCalendarTwo = function () {
  this.start = new CalenderEvent()
  this.end = new CalenderEvent()
  this.start.next = this.end
  this.end.prev = this.start

  this.dstart = new CalenderEvent()
  this.dend = new CalenderEvent()
  this.dstart.next = this.dend
  this.dend.prev = this.dstart
};


/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.checkThice = function (start, end) {
  let t = this.dstart.next
  // empty
  if (t == this.dend) {
    return true
  }
  // before first event
  if (t.left >= end) {
    return true
  }
  // between events
  while (t.next != this.dend) {
    if (t.right <= start && end <= t.next.left) {
      return true
    }
    t = t.next
  }
  // after last event
  if (t.right <= start) {
    return true
  }

  // else
  return false
}

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
  if (!this.checkThice(start, end)) return false
  let t = this.start.next
  // empty
  if (t == this.end) {
    new CalenderEvent(start, end, this.start, this.end)
    return true
  }
  // before first event
  if (t.left >= end) {
    new CalenderEvent(start, end, this.start, t)
    return true
  }
  // between events
  while (t.next != this.end) {
    if (t.right <= start && end <= t.next.left) {
      new CalenderEvent(start, end, t, t.next)
      return true
    }
    t = t.next
  }
  // after last event
  if (t.right <= start) {
    new CalenderEvent(start, end, t, t.next)
    return true
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
      this.deleteAndAddDouble(start, end, toRemove)
      return true
    }
    if (startI != null) toRemove.push(t)
    t = t.next
  }
  // if (startI == null) debugger
  new CalenderEvent(Math.min(startI.left, start), end, startI.prev, this.end)
  this.deleteAndAddDouble(start, end, toRemove)
  return true
};


/** 
 * @param {number} start 
 * @param {number} end
 * @param {CalenderEvent[]} toRemoves
 */
MyCalendarTwo.prototype.deleteAndAddDouble = function (start, end, toRemoves = []) {
  if (toRemoves.length == 1) {
    this.addDouble(Math.max(start, toRemoves[0].left), Math.min(end, toRemoves[0].right))
    delete toRemoves[0]
    return
  }
  this.addDouble(Math.max(start, toRemoves[0].left), toRemoves[0].right)
  this.addDouble(toRemoves[toRemoves.length - 1].left, Math.min(end, toRemoves[toRemoves.length - 1].right))
  for (let i = 1; i < toRemoves.length - 1; i++) {
    this.addDouble(toRemoves[i].left, toRemoves[i].right)
  }
  toRemoves.forEach(x => delete x)
}

/** 
 * @param {number} start 
 * @param {number} end
 */
MyCalendarTwo.prototype.addDouble = function (start, end) {
  if (start == end) return
  let t = this.dstart.next
  // empty
  if (t == this.dend) {
    new CalenderEvent(start, end, this.dstart, this.dend)
    return true
  }
  // before first event
  if (t.left >= end) {
    new CalenderEvent(start, end, this.dstart, t)
    return true
  }
  // between events
  while (t.next != this.dend) {
    if (t.right <= start && end <= t.next.left) {
      new CalenderEvent(start, end, t, t.next)
      return true
    }
    t = t.next
  }
  // after last event
  if (t.right <= start) {
    new CalenderEvent(start, end, t, t.next)
    return true
  }

  // else
  return false
}

MyCalendarTwo.prototype.print = function () {
  let t = this.start.next, books = [], dbooks = [], t2 = this.dstart.next
  while (t != this.end) {
    books.push(t)
    t = t.next
  }
  while (t2 != this.dend) {
    dbooks.push(t2)
    t2 = t2.next
  }
  console.log(`books:${books.map(({ left, right }) => `${left},${right}`).join('|')}`)
  console.log(`double books:${dbooks.map(({ left, right }) => `${left},${right}`).join('|')}`)
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */

// let opts = ["MyCalendarTwo", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book"]
// let params = [[], [28, 46], [9, 21], [21, 39], [37, 48], [38, 50], [22, 39], [45, 50], [1, 12], [40, 50], [31, 44]]
// let expects = [null, true, true, true, false, false, false, true, true, false, false]
// var obj = new MyCalendarTwo();
// for (let i = 1; i < opts.length; i++) {
//   let rtn = obj[opts[i]](...params[i])
//   console.log(i, opts[i], params[i], rtn, expects[i])
//   obj.print()
// }
// console.log(obj.book(10, 20), true); // returns true
// console.log(obj.book(50, 60), true); // returns true
// console.log(obj.book(10, 40), true); // returns true
// console.log(obj.book(5, 15), false); // returns false
// console.log(obj.book(5, 10), true); // returns true
// console.log(obj.book(25, 55), true); // returns true