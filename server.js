const express = require('express');
const server = express();
server.use(express.json());
const hubsRouter = require('./hubs/hubs-router.js');
server.use('/api/hubs', hubsRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});



module.exports = server;