# javascript基础学习之对象

> 最近学习vue,看到响应式原理的时候，发现Object.defineProperty()这个api都不知道，遂决定好好复习下，并决定以javascript对象为开始，重温Array/Function等javascript类。
> 好记性不如烂笔头，开始吧。


## Object定义

> 有个基本概念还是很重要的（定义基本来自javascript权威指南） 

javascript的基本数据类型，它将很多值聚合在一起，很多值可以看作属性的无序集合。属性包括名字和值，属性名是包含空字符串在内的任意字符串，属性值可以是任意javascript值或者（es5）是一个getter／setter函数。属性还包括值／可写／可枚举／可配置的特性。

## 属性特性

>  对象属性除了名字和值(es5中setter,getter)之外，属性还包括一些可写/可枚举/可配置等特性。这些属性特性的集合在es5中叫“属性描述符对象(property descriptor)”。

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

### 通过Object.defineProperty()设置特性

```javascript
  var o = {}
  Object.defineProperty(o, 'x', {
    value: 2,
    writable: true,
    enumerable: false,
    configurable: true
  })
  console.log(o.x)
  console.log(Object.keys(o))
```

### 通过Object.getOwnPropertyDescriptor()可以获得某个对象特定属性的描述符：

```javascript
Object.getOwnPropertyDescriptor({x: 2}, 'x')  
// => {configurable:true, enumerable: true ,value: 2, writable: true}


```
