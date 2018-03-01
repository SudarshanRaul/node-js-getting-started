const express = require('express');
const path = require('path');
const cors = require('cors');

const getData = require('./API/getData');

const PORT = process.env.PORT || 5000;

var corsOptions = {
  origin: 'https://sudarshan.js.org',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/getData/:id', cors(corsOptions), (req, res) => getData(req, res))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
