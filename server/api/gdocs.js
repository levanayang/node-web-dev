let express = require('express');
let googleDocs = require('../models/gdocs');

let router = express.Router();

router.get('/', (req, res) => {
    let city = req.params.city;

    googleDocs.retrieveResume((err, resume) => {
        if (err)
            return res.json(err);
        return res.json(resume);
    });

});

module.exports = router;