const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/GET', function(req, res, next) {
    res.render('GET', {title: "GET Request"});
});

router.get('/POST', function(req, res, next) {
    res.render('POST', {title: "POST Request"});
});



module.exports = router;
