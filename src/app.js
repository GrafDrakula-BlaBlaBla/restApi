const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const usersRoute = require('./resources/users/user.router');
const boardsRoute = require('./resources/boards/board.router');
const tasksRoute = require('./resources/tasks/task.router')

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json({}));

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', usersRoute);
app.use('/boards', boardsRoute);
app.use('/boards/', tasksRoute);


// app.use((req, res, next) => {
//   const error = new Error('Not found')
//   error.status = 404
//   next(error);
// });

// eslint-disable-next-line no-unused-vars
// app.use((err, req, res, next) => {

//   // res.status(err.status);
//   res.json({
//     status: err.status,
//     message: err.message,
//     // stack: err.stack,
//   });
// });

module.exports = app;
