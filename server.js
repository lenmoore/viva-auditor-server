const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

// Middleware and routes setup here

const privateKey = fs.readFileSync('/path/to/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/path/to/fullchain.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(443, () => {
    console.log('HTTPS server running on port 443');
});
