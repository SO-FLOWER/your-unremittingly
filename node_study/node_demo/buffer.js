ArrayBuffer.prototype.split = function (sep) {
  let len = Buffer.from(sep).length;
  let ret = [];
  let start = 0;
  let offset = 0;

  while (offset = this.indexOf(sep, start) !== -1) {
    ret.push(this.slice(start, offset));
    start = offset + len;
  }
  return ret;
}

let buf = "zecx吃，我吃馒头，你们吃火锅";
let bufAll = buf.split('吃');
let arr = Buffer.split('吃');
console.log(bufAll);