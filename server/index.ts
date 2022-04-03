const express = require('express');
const { test } = require('./controller');
require('dotenv').config();

const { SERVER_PORT } = process.env;

const app = express();

app.use(express.static(__dirname + '/../../dist'));

app.use(express.json());

app.get('/test', test);

app.listen(SERVER_PORT, console.log(`For the Horde! [${SERVER_PORT}]`));
