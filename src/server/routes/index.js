const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function (req, res, next) {
  let url;
  if (req.app.get('env') === 'production') {
    url = path.join(__dirname, '/index.html');
  } else {
    url = path.join(__dirname, '../../../build', '/index.html');
  }
  res.sendFile(url);
});

module.exports = router;
