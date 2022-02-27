//node全局变量

// console.log(global);
//绝对路径
// console.log(__filename);
//相对路径
// console.log(__dirname);
//默认情况下，this是一个空对象和global是不一样的
// console.log(this);

//输出false
// console.log(this == global);  

//输出true
// (function () {
//   console.log(this == global);
// })()

//--------------------------------------------------------------------------------------
//process全局变量

//资源: 内存  CPU
// console.log(process.cpuUsage());  //获取cpu运行时间
// console.log(process.memoryUsage());  //获取内存占用大小

//运行环境: 运行目录 node环境 CPU架构 用户环境 系统平台
// console.log(process.cwd());
// console.log(process.versions);
// console.log(process.arch); //操作系统
// console.log(process.env.NODE_ENV);
// console.log(process.env.PATH); //本地电脑的环境变量
// console.log(process.env.USERPROFILE); //mac HOME
// console.log(process.platform); //操作系统

//运行状态: 启动参数 PID 运行时间
// console.log(process.argv); //返回数组路径----通过命令行空格传参数
// console.log(process.pid); //进程识别时间
// console.log(process.uptime()); //js脚本代码运行的时间
