require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const router = require('./routes/index')
const connectDB = require('./database/mongo');



server.use(express.urlencoded());
server.use(express.json());
server.use(bodyParser.json({ limit: '50mb' }));

server.use((req, res, next) => {
  next(console.error( `URL ${req.originalUrl} not found!`));
});

server.use('/api', router);

connectDB().then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});

module.exports = server;