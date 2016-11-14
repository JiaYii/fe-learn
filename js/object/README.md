# javascript基础学习之对象

> 最近学习vue,看到响应式原理的时候，发现Object.defineProperty()这个api都不知道，遂决定好好复习下，并决定以javascript对象为开始，重温Array/Function等javascript类。
> 好记性不如烂笔头，开始吧。


## Object定义

> 有个基本概念还是很重要的（定义基本来着javascript权威指南） 

javascript的基本数据类型，它将很多值聚合在一起，很多值可以看作属性的无序集合。属性包括名字和值，属性名是包含空字符串在内的任意字符串，属性值可以是任意javascript值或者（es5）是一个getter／setter函数。属性还包括值／可写／可枚举／可配置的特性。
