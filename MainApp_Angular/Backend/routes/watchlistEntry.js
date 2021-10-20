const express = require('express');
const router = express.Router();
const WatchlistEntry = require('../models/index').watchlistEntry;

router.get('/', function (req, res, next) {
    WatchlistEntry.findAll({})
        .then(watchlistEntry => res.json(watchlistEntry))
        .catch(err => res.json(err))
    ;
});

module.exports = router;