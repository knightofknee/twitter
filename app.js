"use strict";

var express=require('express')
var morgan=require('morgan')
var volleyball=require('volleyball')

const app=express()

app.listen(3000,function(){

  console.log('server listening')


})

app.use(volleyball)


app.get('/',function(req,res,next){
  console.log('get')


  res.send('hahahaha your tweetsuck')

})




