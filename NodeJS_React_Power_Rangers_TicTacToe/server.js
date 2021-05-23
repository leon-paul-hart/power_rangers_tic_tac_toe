'use strict';

const path = require('path');

const express = require('express');

const app = express();

const staticPath = path.join(__dirname, '/');

app.use(express.static(staticPath));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
    console.log('listening on http://localhost:3000');
});