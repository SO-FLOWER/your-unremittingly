// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('once');
//         resolve('success');
//     }, 1000);
// })

// const start = Date.now();
// promise.then((res) => {
//     console.log(res, Date.now() - start);
// })

// promise.then((res) => {
//     console.log(res, Date.now() - start);
// })

const p = new Promise((resolve, reject) => { // 执行器函数，同步执行
    // 2. 执行异步操作任务
    setTimeout(() => {
        const time = Date.now() // 如果当前时间是偶数就代表成功，否则代表失败
        // 3.1 如果成功了，调用resolve(value)
        if (time % 2 === 0) {
            resolve('成功的数据，value = ' + time)
        } else {
            // 3.2 如果失败了，调用reject(reason)
            reject('失败的数据，reason = ' + time)
        }

    }, 1000);
})

p.then(value => {
    // 接受得到成功的value数据，专业术语：onResolved
    console.log('成功的回调', value)
}, reason => {
    // 接受得到失败的reason数据，专业术语：onRejected
    console.log('失败的回调', reason)
})

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(1000).then((value) => {
    console.log(value);
});
