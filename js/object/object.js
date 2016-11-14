window.onload = function () {
  

  /*原型继承创建一个新对象*/
  var inherit = function (p) {
    if (p == null) { throw typeError() }
    if (Object.create) { return Object.create(p) }
    var t = typeof p
    if (t !== 'object' && t !== 'function') { throw TypeError() }
    function f() {}
    f.prototype = p
    return new f();  
  }
  var change = function (c) {
    c.x = 1
  }
  var o = { x: 'do not change me' }
  change(inherit(o))
  

  /*getter/setter*/
  var p = {
    x: 1,
    y: 1,
    get r() {
      return Math.sqrt(this.x*this.x + this.y*this.y)
    },
    set r(newvalue) {
      var oldvalue = Math.sqrt(this.x*this.x + this.y*this.y)
      var ratio = newvalue/oldvalue
      this.x*=ratio
      this.y*=ratio
    },
    get theta() {
      return Math.atan2(this.y, this.x)
    }
  }
  console.log(p.r)
  console.log(p.theta)

  var serialnum = {
    $n: 0,
    get next() { return ++this.$n },
    set next(n) {
      if (n >= this.$n) {
        this.$n = n*3
      } else {
        throw '序列号不能比当前值小'
      }
    }
  }
  console.log(serialnum.next)
  console.log(serialnum.next)
  serialnum.next = 5
  console.log(serialnum.next)
  console.log(serialnum.$n)

  console.log(Object.getOwnPropertyDescriptor({x:1}, 'x'))/*属性描述符*/

  /*设置属性的特性（Object.defineProperty()）*/
  var o2 = {}
  Object.defineProperty(o2, 'x', {
    value: 2,
    writable: true,
    enumerable: false,
    configurable: true
  })
  console.log(o2)
  console.log(o2.x)
  console.log(Object.keys(o2))
}
