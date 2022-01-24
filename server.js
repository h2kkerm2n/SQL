const http = require('http');

const server = http.createServer(() => {
  res.statuscode = 200;
  res.setheader('content-type', 'text/plain');
  res.end('Hello!');
});

server.listen(3000, () => {
  console.log('server is running on http://localhost:3000');
});
