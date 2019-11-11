const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config');

const MongoClient = require('mongodb').MongoClient;
const mongoUrl = "mongodb://localhost:27017";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/API').get(function (req, res1, next) {
    let response;
    const apikey = config.key;
    console.log('key: ' + apikey);
    let rqst = "https://api.darksky.net/forecast/" + apikey + "/37.8267,-122.4233";
        MongoClient.connect(mongoUrl, function(err, db) {
            if (err) throw err;
            console.log("Connected to MongoDB!");
            const dbo = db.db("PS6");
            dbo.createCollection("requests", function(err, res) {
                if (err) throw err;
                console.log("Collection created!");
            });
            if (dbo.collection("requests").findOne("{'rqst':" + rqst, function(err, res) { // if the request is in the database already
                if (err) throw err;
                console.log("Found");
                let cachedResp = res.response;
                res1.render('apiresp', {resp: cachedResp, wasInDB: "This response was cached in the DB"})
            })) {

            }
            else { // request not in DB, let's add it
                request(rqst, { json: true }, (err, res2, body) => {
                    if (err) {
                        return console.log(err);
                    }
                    response = JSON.stringify(body);
                    console.log('response: ' + response);
                    const dbObj = {request: rqst, response: res};
                    res1.render('apiresp', {resp: response, wasInDB: "This response was not cached in the DB"});
                    dbo.collection("requests").insertOne(dbObj, function (err, res) {
                        if (err) throw err;
                        console.log("Inserted");
                    });
                });
            }
            db.close();
        });


});

module.exports = router;
