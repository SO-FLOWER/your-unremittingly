//构造函数初始化一个Point对象
function Point(x, y) {
    this.x = x;
    this.y = y;
}

//new关键字和构造函数来创建一个实例
var p = new Point(1, 1);

//通过给构造函数prototype对象赋值
Point.prototype.r = function () {
    return (Math.sqrt(
        this.x * this.x + this.y * this.y
    ))
}

console.log(p.r());

