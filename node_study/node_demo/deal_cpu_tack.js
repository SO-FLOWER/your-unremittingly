//node 主线程为单线程时，在大量cpu数据处理密集型任务的时候会进行一个时间上的延迟。
//下面这个例子

const http = require('http');

function sleepTime(time) {
  const sleep = Date.now() + time * 1000;
  while (Date.now() < sleep) { };
  return;
}
sleepTime(4);

const server = http.createServer((res, req) => {
  res.end('server starting........');
})

server.listen(8080, () => {
  console.log('server stating');
})