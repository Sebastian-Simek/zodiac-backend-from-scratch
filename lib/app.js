const express = require('express');
const path = require('path');
const app = express();
const fetch = require('cross-fetch');

// Built in middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


// App routes

app.use('/zodiacs', require('./controllers/zodiacs'));
app.use('/zApi', require('./controllers/zApi'));

async function awaitFetch() {
  const res = await fetch('http://ohmanda.com/api/horoscope/libra');
  const json = await res.json();
  return json;
}
awaitFetch();

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
