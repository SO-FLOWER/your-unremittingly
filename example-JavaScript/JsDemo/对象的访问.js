var book = {
    topic: "javascript",
    fat: true
}

console.log(book.topic);
console.log(book["topic"]); //------另一种方式

book.author = "Flanagan";
console.log(book);
book.contents = {};
console.log(book);

//-----------------------------------------------
let a = "https://www.bai.com";
console.log(a[0]);
console.log(a[a.length - 1]);

let aa = {
    newData: {
        aid: "陈松泉",
    }
}
console.log(aa["newData"]["aid"]);

//-----------------------------------------------
var s = "hello world";
console.log(s.indexOf(" "));
var word = s.substring(s.indexOf(" ") + 1, s.length);
console.log(word);

var s = "test";
var n = [1, 2, 3];
var ss = s.len = 4;
var t = ss;
console.log(s);
var S = new String(s);
var N = new Number(n);
var B = new Object();
console.log(S);
console.log(S.s);
console.log(N);
console.log(B);

