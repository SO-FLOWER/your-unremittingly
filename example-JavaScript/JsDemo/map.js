const m = new Map();
console.log(m);
const o = { p: 'Hello' };

m.set(o, 'content')
console.log(m);
console.log(m.get(o));