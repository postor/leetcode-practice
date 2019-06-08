const LRUCache = function(capacity) {
  this.size = 0;
  this.capacity = capacity;
  this.LL = new DoublyLinkedList();
  this.cache = {};
};

LRUCache.prototype.get = function(key) {
  const getNode = this.cache[key];
  if (getNode) {
    this.LL.moveToHead(getNode);
  } else {
    return -1;
  }
  return getNode.val;
};

LRUCache.prototype.put = function(key, value) {
  // overwrite the value if it exists
  if (this.cache[key]) {
    this.cache[key].val = value;
    this.LL.moveToHead(this.cache[key]);
    return;
  }

  // otherwise create new node
  const node = new Node(key, value);

  // only evict if max capacity has been reached
  if (this.size < this.capacity) {
    this.size++;
  } else {
    const keyToRemove = this.LL.removeTail();
    delete this.cache[keyToRemove];
  }

  // set to most recenlty used
  this.LL.insertHead(node);
  this.cache[key] = node;
};

class DoublyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  removeTail () {
    const evict = this.tail;
    if (evict.prev !== null && this.tail != this.head) {
      evict.prev.next = null;
      this.tail = evict.prev;
    } else {
      this.tail = null;
      this.head = null;
    }
    return evict.key;
  }

  insertHead (node) {
    if (this.head !== null) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
  }

  moveToHead (node) {
    if (node === this.head) return;
    if (node === this.tail) {
      node.next = this.head;
      this.head.prev = node;
      this.tail = node.prev;
      node.prev.next = null;
      node.prev = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.next = this.head;
      node.next.prev = node;
      node.prev = null
    }
    this.head = node;
  }
}

class Node {
  constructor (key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}