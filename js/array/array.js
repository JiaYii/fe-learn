window.onload  = function () {
  
  /*join()方法*/
  (function () {
    var a = [1, 2, 3]
    var b = new Array(10)
    console.log(a.join() + "|" + a.join(''))
    console.log(b.join('-'))
    console.log(a.join().split(','))
  })()

  /*reverse()方法*/
  ;(function () {
    var a = [1, 2, 3]
    console.log(a.reverse() + "|" + a.reverse().join('-'))
  })()

  /*sort()方法*/
  ;(function () {
    var a = [1, 2, 3]
    console.log(a.sort(function (a, b) { 
      return b - a
    }))
  })()

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
  console.log(_sort([2, 10, 8, 19, 5, 0]))
}
