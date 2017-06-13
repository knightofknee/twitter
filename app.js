"use strict";

var express = require('express');
var morgan = require('morgan');
var volleyball = require('volleyball');
var nunjucks = require('nunjucks');
const routes = require('./routes')

const app = express()


app.engine('html', nunjucks.render);
app.set('view engine', 'html')
app.use(volleyball)
app.use('/', routes)
app.use(express.static('public'))

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true,
  noCache: true
});

app.get('/', function(req, res) {
  res.render( 'index');
})

// app.get('/stylesheets/style.css', function(req, res) {
// res.sendFile( './stylesheets/style.css')
// })

app.listen(3000,function(){
  console.log('server listening')
})



