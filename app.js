'use strict';

require('dotenv').config({ path: 'variables.env' });

    const express = require('express');
    const bodyParser = require('body-parser');
    const verifyWebhook = require('./verify-webhook');
    const messageWebhook = require('./message-webhook');

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/', verifyWebhook);
    app.post('/', messageWebhook);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log('Express server is listening on port 5000'));
