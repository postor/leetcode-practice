let arr = new Array(100000).fill(0)
let set = new Set()
let obj = {}

arr.forEach((x, i) => {
  set.add(i)
  obj[i] = 1
})

console.time()
let t1=0
for (let i = 0; i < 100000; i++) {
  if(set.has(i))t1++
}
console.timeEnd()

console.time()
let t2=0
for (let i = 0; i < 100000; i++) {
  if(obj[i])t2++
}
console.timeEnd()