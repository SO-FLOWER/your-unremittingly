const path = require('path');

//序列化路径
const obj = path.parse('./a/b/c');
console.log(obj);
//输出一个对象-里面的参数都将展示出来
//{ root: '', dir: './a/b', base: 'c', ext: '', name: 'c' }
console.log(path.format(obj));


//判断当前路径是否为绝对路径--路径前需要要携带/这个参数--
console.log(path.isAbsolute('foo'));
console.log(path.isAbsolute('/foo'));
console.log(path.isAbsolute('///goo'));

//路径拼接
console.log(path.join('a/b', 'c', 'index.html'));
//----a\b\c\index.html
console.log(path.join('/a/b', 'c', 'index.html'));
//----\a\b\c\index.html


//规范化路径
console.log(path.normalize(''));
console.log(path.normalize('a/b/c/d'));

//绝对路径
//resolve([from] , to );
//path第二个参数一般不要加其他字符，会导致路径上的错误、
console.log(path.resolve('/a', 'b'));
//-----C:\a\b
console.log(path.resolve('index.html'));  //---常用方式 C:\Users\10067\Desktop\keepStudy\node_study\index.html

