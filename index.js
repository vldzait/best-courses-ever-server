require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const router = require('./routes/index')

server.use(express.urlencoded());
server.use(express.json());
server.use(bodyParser.json({ limit: '50mb' }));

server.use((req, res, next) => {
  next(console.error( `URL ${req.originalUrl} not found!`));
});

server.use('/api', router);

server.listen(process.env.PORT, () => {
  console.log(`Example server listening on port ${process.env.PORT}`)
});

module.exports = server;