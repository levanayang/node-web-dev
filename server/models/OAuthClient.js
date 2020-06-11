// youremailprogram.js
// adapted from: https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1
const mailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

require("dotenv").config();
const CLIENT_ID=process.env.GOOGLE_NODEMAILER_CLIENT_ID;
const CLIENT_SECRET=process.env.GOOGLE_NODEMAILER_CLIENT_SECRET;
const REDIRECT_URI="https://developers.google.com/oauthplayground";
const REFRESH_TOKEN=process.env.GOOGLE_NODEMAILER_REFRESH_TOKEN;
const SEND_EMAIL=process.env.SEND_EMAIL;

class OAuthClient {
    #oauth2Client
    #credentials
    #ACCESS_TOKEN
    #transporter

    constructor() {
        this.#oauth2Client = new OAuth2(
            CLIENT_ID, // ClientID
            CLIENT_SECRET, // Client Secret
            REDIRECT_URI // Redirect URL
        );

        this.#credentials = this.#oauth2Client.setCredentials({
            refresh_token: REFRESH_TOKEN
        });

        this.#ACCESS_TOKEN = this.#oauth2Client.getAccessToken();

        this.#transporter = this.generateOAuth2Transport();


    }

    generateOAuth2Transport () {
        return mailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: SEND_EMAIL,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: this.#ACCESS_TOKEN
            }
        });
    }

    get transporter() {
        return this.#transporter;
    }
}

module.exports = OAuthClient;