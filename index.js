const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());

app.use(express.static('public'));

app.listen(3000, console.log('listening port 3000'));
