let express = require('express');
let Cities = require('../models/cities');

// creating an express router
// handles middleware for backend data
// can define different http methods with this object
let router = express.Router();

// request and response
// retrieves data from server
router.get('/',  (req, res) => {
    Cities.retrieveAll((err, cities) => {
        if (err)
            return res.json(err);
        // returns a list of strings that represent the names of the cities
        return res.json(cities);
    })
});

// adds city to db
router.post('/', (req, res) => {
    let city = req.body.city;

    Cities.insert(city, (err, result) => {
        if (err)
            return res.json(err);
        return res.json(result);
    });
});

module.exports = router;