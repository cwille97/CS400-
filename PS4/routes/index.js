const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/API').get(function (req, res1, next) {
      let response;
      const apikey = config.key;
      console.log('key: ' + apikey);
      let rqst = "https://api.darksky.net/forecast/" + apikey + "/37.8267,-122.4233";
      request(rqst, { json: true }, (err, res2, body) => {
        if (err) { return console.log(err); }
        response = JSON.stringify(body);
        console.log('response: ' + response);
        res1.render('apiresp', {resp: response});
      });
});

module.exports = router;
