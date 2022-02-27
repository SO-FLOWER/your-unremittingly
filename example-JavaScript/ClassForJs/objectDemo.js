/*
 * @Author: your name
 * @Date: 2021-11-28 00:11:42
 * @LastEditors: your name
 * @LastEditTime: 2021-11-28 00:40:22
 * @Description: file content
 */
let person = new Object();
console.log(person);
person.name = "Jsons";
person.age = 18;
console.log(person);

function Name(x, y) {
  this.x = x;
  this.y = y;
}

var p = new Name(1, 2);
console.log(p);