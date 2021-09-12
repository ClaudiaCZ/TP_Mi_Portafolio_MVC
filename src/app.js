const express = require('express');
const app = express()
const path = require('path');
const main = require('./routers/main.js')
const about = require('./routers/about.js')

const port = 3030;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', main);
app.use('/about', about);




app.listen(port, () => console.log('servidor en el puerto ', port))