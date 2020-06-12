const express = require('express');
const router = express.Router();
const mailer = require('nodemailer');
const PORT = process.env.PORT || 5000;
const OAuthClient = require('./OAuthClient');

require('dotenv').config();
const SEND_EMAIL=process.env.SEND_EMAIL;
const REC_EMAIL=process.env.REC_EMAIL;

class EmailHandler {
    #oauth2Client
    #transporter;

    MAIL_OPTIONS = {
        from: SEND_EMAIL,
        to: REC_EMAIL,
        subject: "Node.js email with secure Oauth",
        generateTextFromHTML: true,
        html: "<b>test</b>"
    };

    constructor() {
        this.#oauth2Client = new OAuthClient();

        // this was from simple tutorial without oauth2
        // this.#transport = {
        //     host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
        //     port: 465,
        //     auth: {
        //         user: SEND_EMAIL
        //         pass: process.env.SEND_EMAIL_PASS
        //     }
        // };

        this.#transporter = this.#oauth2Client.transporter;
    }

    sendContactFormEmail(name, email, content) {
        let mail = {
            from: name,
            address: email,
            to: REC_EMAIL,
            subject: 'New message from ' + email,
            generateTextFromHTML: true,
            html: "<p>" + content +"</p>"
        }

        this.#transporter.verify((error, success) => {
            if (error) {
                console.log("Contact form email could not be sent due to one or more errors:")
                console.log(error);
                return error;
            } else {
                console.log('Server is ready to take messages');
                let mailResponse = this.sendSecureMail(mail)

                let response = {
                    verificationStatus: success,
                    mailResponse: mailResponse
                }

                return response
            }
        });
    }

    sendmail(mail) {
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
    sendSecureMail(mail) {
        // TODO: enable delivery status notification for undelivered/delayed messages
        // https://nodemailer.com/smtp/dsn/
        this.#transporter.sendMail(mail, (error, response) => {
            error ? console.log(error) : console.log(response);
            this.#transporter.close();
        });
    }
}

module.exports = EmailHandler;