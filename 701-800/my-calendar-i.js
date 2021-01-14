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

var MyCalendar = function () {
  this.start = new CalenderEvent()
  this.end = new CalenderEvent()
  this.start.next = this.end
  this.end.prev = this.start
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
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

  // else
  return false
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */