# javascript基础学习之对象

> 最近学习vue,看到响应式原理的时候，发现Object.defineProperty()这个api都不知道，遂决定好好复习下，并决定以javascript对象为开始，重温Array/Function等javascript类。
> 好记性不如烂笔头，开始吧。


## Object定义

> 有个基本概念还是很重要的（定义基本来自javascript权威指南） 

javascript的基本数据类型，它将很多值聚合在一起，很多值可以看作属性的无序集合。属性包括名字和值，属性名是包含空字符串在内的任意字符串，属性值可以是任意javascript值或者（es5）是一个getter／setter函数。属性还包括值／可写／可枚举／可配置的特性。

## 属性特性

>  对象属性除了名字和值(es5中setter,getter)之外，属性还包括一些可写/可枚举/可配置等特性。这些属性特性的集合在es5中叫“属性描述符对象(property descriptor)”。

描述符对象包括：

+ 值
    - value (属性值，可以是任意javascript值)
    - getter (es5中可以用getter方法代替值，目标属性被访问就会调此方法并返回运算结果)
+ 可写性
    - writable (布尔值，表明是否可以重写该属性的值)
    - setter (是否可写或es5中setter)
+ 可枚举 
    - enumerable (布尔值：是否可以用for／in 或 Object.keys中列举出来)
+ 可配置
    - configurable (布尔值：是否可以删除或修改属性特性)

### 1.通过Object.getOwnPropertyDescriptor()可以获得某个对象特定属性的描述符：

```javascript

Object.getOwnPropertyDescriptor({x: 2}, 'x')  
// => {configurable:true, enumerable: true ,value: 2, writable: true}

```

### 2.getter和setter

对象属性是由名字（key）/值（value） 和 一组特性（属性描述符对象）构成。在es5中属性值可以由一个或两个方法（getter/setter）代替。getter和setter定义的属性叫存取器属性。

+ 存取器属性运行机制
    - 查询(value) 查询时javascript调用getter方法（无参数）返回值就是getter方法表达式的值。
    - 设置(writable) 设置时javascript调用setter方法，将赋值表达式右侧当做参数传人setter。
存取器属性（serialnum.next）直接量写法

```javascript
    serialnum = {
        $n: 1,
        get next() { return ++this.$n },
        set next(n) {
          this.$n = this.$n*n
        }
    }
    serialnum.$n // => 2 调用get方法查询值
    serialnum.next = 2 // 会调用set方法设置值
```

### 3.通过Object.defineProperty()设置特性

+ 语法
    － object.defineProperty(obj, prop, descriptor)
+ 参数
    - obj 目标对象
    - prop 需要定义的属性或方法的名字
    - descriptor 目标属性所拥有的特性

```javascript
  var o = {}
  Object.defineProperty(o, 'x', {
    value: 2,
    writable: true,
    enumerable: false,
    configurable: true
  })
  console.log(o.x) // => 2
  console.log(Object.keys(o)) // => []

  Object.defineProperty(o, 'x', {writable: false})
  o.x = 8 // => 操作失败但不报错，在严格模式下抛出类型异常错误
  Object.defineProperty(o, 'x', {value: 8}) 
  console.log(o.x) // => 8 依然可配置，可通过这种方式修改
```

### 4."setter/getter"与vue.js

vue.js的官方文档这样描述：

> 把一个普通 Javascript 对象传给 Vue 实例来作为它的 data 选项，Vue 将遍历它的属性，用 Object.defineProperty 将它们转为 getter/setter。这是 ES5 的特性，不能打补丁实现，这便是为什么 Vue 不支持 IE8 以及更低版本浏览器的原因。

例子（可见object.js）

```html
  <div>
    <input name="" id="texing_input" placeholder="请输入" value="getter和setter测试"> 
    <span id="texing_output"></span>
  </div>
```

```javascript

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

```

## API汇总

