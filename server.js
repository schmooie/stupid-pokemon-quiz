'use strict';

let express = require('express');
let app = express();

app.use('/', express.static(__dirname + '/dist'));
app.listen(8888, err => {
  if (err) {
    console.error(err);
    return;
  }
});