let express = require('express');
let emailHandler = require('../models/EmailHandler')

let mailingController = express.Router();

mailingController.post('/send', (req, res, next) => {
    try {
        let name = req.body.name;
        let email = req.body.email;
        let content = req.body.message;
        let emailHandler1 = new emailHandler();

        emailHandler1.sendContactFormEmail(name, email, content)
    } catch (error) {
        console.log(error);
    }

})

module.exports = mailingController;