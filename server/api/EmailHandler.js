let express = require('express');
let emailHandler = require('../models/EmailHandler')

let mailingController = express.Router();

mailingController.post('/send', (req, res, next) => {
    let name = req.body.name;
    let email = req.body.email;
    let content = req.body.message;
    let emailHandler1 = new emailHandler();

    // emailHandler1.sendContactFormEmail(name, email, content).then(() => {
    //     console.log("Post request has been sent from Email Handler api");
    //     return res.json;
    // }).catch((err) => {
    //     console.log("There was an error in Email Handler api with sending the contact form email:" + err);
    //     return err;
    // });

    emailHandler1.sendContactFormEmail(name, email, content, (err, mailResponse) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        }
        console.log("Post request has been sent from Email Handler api");
        res.json({
            status: 'success'
        });
    }).catch((err) => {
        console.log("There was an error in Email Handler api with sending the contact form email:" + err);
        return err;
    });
})

module.exports = mailingController;