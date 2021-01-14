class LinkedNode {
  constructor(val, prev, next) {
    this.val = val
    /** @member {LinkedNode} */
    this.prev = prev
    /** @member {LinkedNode} */
    this.next = next
  }
}


/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.start = new LinkedNode(-1)
  this.end = new LinkedNode(-1, this.start)
  this.start.next = this.end
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let t = this.start.next
  for (let i = 0; i < index && (t != this.end); i++) {
    t = t.next
  }
  return t.val
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let node = new LinkedNode(val, this.start, this.start.next)
  this.start.next.prev = node
  this.start.next = node
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let node = new LinkedNode(val, this.end.prev, this.end)
  this.end.prev.next = node
  this.end.prev = node
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let t = this.start.next
  for (let i = 0; i < index; i++) {
    t = t.next
    if (!t) return
  }

  let node = new LinkedNode(val, t.prev, t)
  t.prev.next = node
  t.prev = node
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let t = this.start.next
  for (let i = 0; i < index; i++) {
    if (t == this.end) return
    t = t.next
  }
  if (t == this.end) return
  t.prev.next = t.next
  t.next.prev = t.prev
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */