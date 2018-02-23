const express = require('express')
const path = require('path')

const getData = require('./API/getData');

const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/getData/:id', (req, res) => getData(req, res))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
