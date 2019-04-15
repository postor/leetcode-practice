/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  /**
   * 状态机
   */
  class FSM {
    constructor() {
      this.state = 0
      this.str = ''
      this.arr = []
    }

    /**
     * 下一个字符
     * @param {*} char 
     */
    next(char) {
      switch (this.state) {
        case 0:
          //0=初始，接收"/"=>1
          if (char == '/') {
            this.state = 1
            return
          }
          throw 'should not come here'
        case 1:
          //1=/后，接收"/"=>1 其他字符(记录)=>3
          if (char == '/') return
          this.str = char
          this.state = 2
          break
        case 2:
          //2=其他字符后，接收  "/"(进入路径)=>1 其他字符(记录)=>3
          if (char == '/') {
            this.state = 1
            let folder = this.str
            this.str = ''
            if (folder == '.') return
            if (folder == '..') {
              this.arr.pop()
              return
            }
            this.arr.push(folder)
            return
          }
          this.str += char
          break
        default:
          throw 'should not come here'
      }
    }

    /**
     * 结束
     */
    final() {
      this.next('/')
      return '/' + this.arr.join('/')
    }

  }

  let fsm = new FSM()
  for (let i = 0; i < path.length; i++) {
    fsm.next(path[i])
  }
  return fsm.final()
};