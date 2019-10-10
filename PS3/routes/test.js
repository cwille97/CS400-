const express = require('express');
const router = express.Router();

router.route('/')
    .get(function (req, res, next) {
        res.render('index', {title: 'This is a Test GET' }); // render a page with the GET information
    });

module.exports = router;