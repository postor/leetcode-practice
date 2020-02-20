function processData(input) {
  //Enter your code here
  let it = gen()
  for(let i=1;i<input;i++){
      it.next()    
  }
  return it.next().value
  
  function * gen(){
      let i=1;
      while(true){
          let str=(''+i)
          if(str.includes('4')||str.includes('13')) {
              i++
              continue
          }
          yield i
          i++
      }
  }
} 

console.log(processData(12))