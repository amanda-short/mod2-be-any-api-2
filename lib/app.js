const express = require('express');
const path = require('path');
// const { nextTick } = require('process');

const app = express();

// Built in middleware
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// App routes

app.use('/university', require('./controllers/university'));
app.use('/brewery', require('./controllers/brewery'));

app.use('/my-middleware', (req, res, next) => {
  next({ message: 'this is an error' });
});    

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
