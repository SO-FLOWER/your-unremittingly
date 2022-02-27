console.log(a);
var a = "a";
var foo = () => {
    console.log(a);
    var a = "a1"
}
foo();

//js代码是自上而下进行执行的，js执行前引擎会进行预编译，预编译期间函数声明和变量声明会提升其作用域到最顶端。
//函数提升只会提升函数声明，而不会提升函数表达式。

var a;
console.log(a); //undefined
a = "a";
var foo = () => {
    var a;
    console.log(a); //函数作用域中，undefined
    a = "a1";
}
foo();


