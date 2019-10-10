const express = require('express');
const router = express.Router();


router.route('/')
    .get(function (req, res, next) {
      res.render('get', {data: 'Hey now'});
    })
    .post(function (req, res, next) {
      res.render('post', {data: (req.body.data), length: (req.body.data.length)})
    });
    /*
    .get(function (req, res, next) {
      res.render('index', {title: 'This is a GET' }); // render a page with the GET information
    })
    */
    /*
    .get(function (req, res, next) {
      // vars on query string req.query
      res.send(`Bar has the value ${req.query.bar}`); // render a page with the GET information
    })
    */
    /*
    .post(function (req, res, next) {
      res.render('index', {title: 'This is a POST' });
    })
    */
    /*
    .post(function (req, res, next) {
      res.send(`Bar has the value ${req.body.bar}`); // vars are on req.body
    })
    .put(function (req, res, next) {
      res.send(`Bar has the value of ${req.body.bar}`); // vars are on req.body
    })
    .delete(function (req, res, next) {
      res.send(`Bar has the value of ${req.body.bar}`); // vars are on req.body
    });

router.route('/:name') // matches http://localhost:3000/<string>

    .get(function (req, res, next) {
      res.send(`Name has the value of ${req.params.name}`)
    });

router.route('/:first/:last') // matches http://localhost:3000/<string>

    .get(function (req, res, next) {
      res.send(`Name has the value of ${req.params.first} ${req.params.last}`)
    });
    */

module.exports = router;
