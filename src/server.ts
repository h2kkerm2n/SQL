import Http from 'http';
import App from './app';
import { openDatabaseConnection } from './db/db';

/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'text/plain');
  res.end('Hello!');
}); */

const startServer = async () => {
  const httpServer = Http.createServer(App);
  await openDatabaseConnection();
};
httpServer.listen(3000, () => {
  console.log('server is running on http://localhost:3000');
});

startServer();
