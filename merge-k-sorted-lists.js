/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const h = {}
  lists = lists.filter(x=>x)
  lists.sort((x, y) => x.val - y.val)
  let cur = h
  lists.forEach(x => {
    cur.next = {
      list: x
    }
    cur = cur.next
  })

  let rtn = null, curN
  while (true) {
    //没有更多列了
    if (!h.next) {
      return rtn
    }

    //append
    const node = h.next.list
    if(!node){
      if(!h.next.next){
        return rtn
      }
      h.next=h.next.next
      continue
    }
    if (!rtn) {
      curN = rtn = node
    } else {
      curN.next = node
      curN = node
    }

    const nodePointer = node.next
    node.next = null

    //清空一列，替换为下一列
    if (!nodePointer) {
      h.next = h.next.next
      continue
    }

    //reform
    h.next = h.next.next
    let curH = h
    while (true) {
      if (!curH.next) {
        curH.next = {
          list: nodePointer
        }
        break
      }
      if (nodePointer.val < curH.next.list.val) {
        const tmp = {
          list: nodePointer,
          next: curH.next
        }
        curH.next = tmp
        break
      }
      curH = curH.next
    }
    //print(h,x=>x.list?x.list.val:'H')
  }

};

print(mergeKLists([null,null]))
/*
print(mergeKLists([
  {
    val: 1,
    next: {
      val: 4,
      next: {
        val: 5
      }
    }
  },
  {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 4
      }
    }
  }, {
    val: 2,
    next: {
      val: 6
    }
  }
]))
*/
function print(l,fn=(x)=>x?x.val:x) {
  let str = '',cur=l

  while (true) {
    str += '|' + fn(cur)
    if(!cur){
      break;
    }
    cur = cur.next
  }
  console.log(str)
}
