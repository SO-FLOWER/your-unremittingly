const path = require('path');
const fs = require('fs');

//readFile
// fs.readFile(path.resolve('data.txt'), 'utf-8', (err, data) => {
//   if (!null) {
//     console.log(data);
//   }
// })

//writeFile
// 1、通过第二个参数直接进行修改文件，会直接重写文件里面的数据
// 2、通过第一个参数重写的文件名称，源文件里面没有，会重新写入并创建一个新的文件
// 3、通过第三个参数来规定一些规则--
// fs.writeFile(path.resolve('data.txt'), 'fighting', {
//   mode: 438, //默认权限为可读可写不可执行 0x666 转译成十进制438
//   flag: 'w+', //r+ 会直接重新写入数据不会直接清空再写入，而w+则会直接清空再写入
//   encoding: 'utf-8'
// }, (err) => {
//   if (!err) {
//     fs.readFile(path.resolve('data.txt'), 'utf-8', (err, data) => {
//       console.log(data);
//     })
//   }
// })

//appendFile
// fs.appendFile('data.txt', 'csq', () => {
//   console.log('写入成功');
// })

//copyFile
// fs.copyFile('data.txt', 'dataCopy.txt', () => {
//   console.log('拷贝成功');
// })

//watchFile    interval监听的时间时长，默认为毫秒 
fs.watchFile('data.txt', { interval: 20 }, (curr, prev) => {
  if (curr.mtime !== prev.mtime) {
    console.log('文件被修改了');
    fs.unwatchFile('data.txt')
  }
})