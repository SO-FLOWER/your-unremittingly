for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
};


for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

//---------------------------------------------

for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}