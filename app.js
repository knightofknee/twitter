"use strict";

var express = require('express');
var morgan = require('morgan');
var volleyball = require('volleyball');
var nunjucks = require('nunjucks');

const app = express()


app.engine('html', nunjucks.render);
app.set('view engine', 'html')



nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true,
  noCache: true
});

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];




app.get('/', function(req, res) {
  res.render( 'index', {title: 'Hall of Fame', people: people} );
})

app.listen(3000,function(){

  console.log('server listening')


})

app.use(volleyball)

