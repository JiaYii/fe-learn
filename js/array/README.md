# javascript基础学习之数组

> 数组作为javascript基本类型之一，在实际运用中使用的也相当频繁。js引擎也提供了比较多方法,熟悉这个api也很重要。还是那句话，好记性不如烂笔头，go！

## Array定义

在学习对象的时候，发现数组其实是对象的一个类（[object, Array]），就是说数组是继承了Object.prototype上的方法的，它本质上还是对象。不过数组是值的有序集合，每个值叫一个元素（可以是任何javascript类型值），每个元素在数组中的位置以数字表示叫索引。

```javascript
 typeof([]) // => object
 Object.prototype.toString.call([]) // => [object, Array]
```


## Array方法

### 1. join()

Array.join(str)方法将数组中所有元素转化为字符串并连接在一起，并返回生成的字符串。str为指定分格符。String.split()可以将字符串分割成若干块来创建一个数组。

```javascript
    var a = [1, 2, 3]
    var b = new Array(10)
    console.log(a.join() + "|" + a.join('')) // => 1,2,3|123
    console.log(b.join('-')) // => ---------
    console.log(a.join().split(',')) // => ["1", "2", "3"]
```

### 2. reverse() 

Array.reverse()方法将数组中的元素顺序颠倒，它采用替换，在原先数组中重新排列，而不是创建新的数组。

```javascript
    var a = [1, 2, 3]
    console.log(a.reverse() + "|" + a.reverse().join('-')) // => 3,2,1|1-2-3
```

### 3. sort()

Array.sort(orderfunction)方法将数组中的元素排序并返回排序后的数组,当无参数时，数组元素以字母表顺序排序（如有必要将临时转化为字符串进行比较）。

```javascript
    var a = [1, 2, 3]
    console.log(a.sort(function (a, b) { 
      return b - a    // [3, 2, 1] 数值大小相反的顺序
    }))
```

顺便总结下冒泡排序写法

```javascript
     /*冒泡排序(不使用第三方变量交换值)*/
  function _sort(array) {
    if (!array || !array.length) {return}
    var len = array.length
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1; j++) {
        if (array[j] > array[j+1]) {
          array[j] = array[j+1] - array[j] 
          array[j+1] = array[j+1] - array[j]
          array[j] = array[j] + array[j+1]
        }
      }
    }
    return array
  }
```

### 4. concat()




