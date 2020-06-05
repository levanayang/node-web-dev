let express = require('express');
let emailHandler = require('../models/EmailHandler')

let router = express.Router();

router.post('/send', (req, res, next) => {
    let name = req.body.name
    let email = req.body.email
    let message = req.body.message
    let content = `name: ${name} \n email: ${email} \n message: ${message} `
    let emailHandler1 = new emailHandler();

    emailHandler1.sendContactFormEmail(name, email, content)
})

module.exports = router;