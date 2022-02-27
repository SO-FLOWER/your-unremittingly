var A = { n: 4399 };
var B = function () { this.n = 9999 };
var C = function () { var n = 8888 };

B.prototype = A;
C.prototype = A;
var b = new B(); // 函数内部this.n = 9999(此时this执行b)
var c = new C(); // c对象没有自身的n属性，向上查找，找到原型上的n属性

A.n++;

console.log(b.n); //9999
//b.n 首先查找b对象自身有没有n属性，如果没有就会在原型prototype上面查找，
console.log(c.n); //4400