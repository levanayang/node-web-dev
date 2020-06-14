const OAuthClient = require('./OAuthClient');

require('dotenv').config();
const REC_EMAIL=process.env.REC_EMAIL;

class EmailHandler {
    #oauth2Client
    #transporter;

    constructor() {
        this.#oauth2Client = new OAuthClient();
        this.#transporter = this.#oauth2Client.transporter;
    }

    async sendContactFormEmail(name, email, content, callback) {
        let mail = {
            from: name,
            address: email,
            to: REC_EMAIL,
            subject: 'New message from ' + email,
            generateTextFromHTML: true,
            html: "<p>" + content + "</p>"
        }

        this.#transporter.verify().then((res) => {
            console.log('Transporter-Server connection has been verified.');
            this.#transporter.sendMail(mail);
        }).then((res) => {
            console.log("Email has been sent.")
            callback(res);
        }).catch((err) => {
            console.log("Email handler SendSecureMail has received an error:");
            console.log(err);
            callback(err);
        }).finally(() => {
            this.#transporter.close();
        })

        // return new Promise((resolve, reject) => {
        //     this.#transporter.verify().then((res) => {
        //         console.log('Transporter-Server connection has been verified.');
        //         this.#transporter.sendMail(mail);
        //     }).then((res) => {
        //         console.log("Email has been sent.")
        //         resolve(res);
        //     }).catch((err) => {
        //         console.log("Email handler SendSecureMail has received an error:");
        //         console.log(err);
        //         reject(err);
        //     }).finally(() => {
        //         this.#transporter.close();
        //     })
        // });
    }
}

module.exports = EmailHandler;