const express = require('express')
const router = express.Router();


// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets ,showForm: true} );
});


router.get('/users/:name', function(req, res, next){

  var twitName=req.params.name

  var tweets1=tweetBank.list()

  var tweets2=tweetBank.find({'name': twitName})

  console.log('hi',twitName,'tweets1',tweets2)

  if (twitName){

    res.render('index', {tweets:tweets2})



  }

})


module.exports = router;
