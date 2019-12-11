const express = require('express');
const helmet = require('helmet');

const UserRouter = require('./users/user-router.js');

const server = express();

server.get('/', (req, res) => {
    res.send(`<h2>Sanity Test!</h2>`);
  });


server.use(helmet());
server.use(express.json());

server.use('/api/users', UserRouter);

module.exports = server;
