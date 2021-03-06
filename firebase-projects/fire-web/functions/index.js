const functions = require('firebase-functions');
const express = require('express');
const engines = require('consolidate');

var msg = "Hello World!";
const app = express();
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

// app.get('/timestamp', (request, response) =>{
//     response.send(`${Date.now()}`);
// });

app.get('/', (request, response) =>{
    response.set('cache-control', 'public, max-age=300, s-maxage=600');
    response.render('index', {msg});
});

exports.app = functions.https.onRequest(app);
