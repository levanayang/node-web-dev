const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 5000;

require('dotenv').config();

class EmailHandler {
    #transport;
    #transporter;

    constructor() {
        this.#transport = {
            host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
            port: 465,
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_EMAIL_PASS
            }
        };
        this.#transporter = nodemailer.createTransport(this.#transport);
    }

    sendContactFormEmail(name, email, content) {
        let mail = {
            from: name,
            to: process.env.MY_EMAIL,
            subject: 'New message from ' + email,
            text: content
        }

        this.#transporter.verify((error, success) => {
            if (error) {
                console.log(error);
                return error;
            } else {
                console.log('Server is ready to take messages');
                let mailResponse = this.callSendmail(mail)

                let response = {
                    verificationStatus: success,
                    mailResponse: mailResponse
                }

                return response
            }
        });
    }

    callSendmail(mail) {
        this.#transporter.sendMail(mail, (err, data) => {
            if (err) {
                console.error(err);
                return err;
            } else {
                console.log('Email sent: ' + data.response)
                return data.response;
            }
        })
    }
}

module.exports = EmailHandler;