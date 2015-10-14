'use strict';

let bodyParser = require('body-parser');
let express = require('express');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('.'));
app.listen(8888, err => {
  if (err) {
    console.error(err);
    return;
  }
});