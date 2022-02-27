/*
 * @Author: your name
 * @Date: 2021-12-03 00:00:15
 * @LastEditors: your name
 * @LastEditTime: 2021-12-05 14:48:13
 * @Description: file content
 */

//freeze()整个对象不可更改
const o2 = Object.freeze({ name: 'Js', age: 24 });
o2.name = 'Jsons';
console.log(o2);

const a = 3;
console.log(a);

const b = { name: "js", age: 24 };
b.name = "Jsons"
console.log(b);

function test(params) {
  message = "hi-Jons";
}
test();
console.log(message);
console.log(!"");

for (var index = 0; index < 12; index++) {
  index++
}
console.log(index);
// console.log(index);