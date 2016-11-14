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

  var texing_input = document.getElementById('texing_input'),
      texing_output = document.getElementById('texing_output')
  serialnum = {
    $n: 2,
    get next() { return ++this.$n },
    set next(n) {
      texing_output.innerHTML = n
    }
  }
  
  serialnum.next = texing_input.value;
  texing_input.addEventListener('blur', function () {
    serialnum.next = texing_input.value
  })

/*属性描述符*/

  console.log(Object.getOwnPropertyDescriptor({x:1}, 'x'))

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
