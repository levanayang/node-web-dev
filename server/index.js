const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let db = require('./database/index.js');

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;
if (ENV === 'production') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/cities', require('./api/cities'));
app.use('/api/weather', require('./api/weather'));
app.use('/', require('./api/EmailHandler'));

// path finding for production build
if (ENV === 'production') {
    // serve static files that are in the client/build folder
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
}


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

db.query('SELECT NOW()', (err, res) => {
    if (err.error)
        return console.log(err.error);
    console.log(`PostgreSQL connected: ${res[0].now}.`);
});

module.exports = app;