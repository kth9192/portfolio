const express = require('express'),
  app = express(),
  cors = require('cors'),
  https = require('https'),
  path = require('path'),
  bodyParser = require('body-parser');

const logger = require('morgan');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser());

app.use(
  express.urlencoded({
    extended: true,
  })
);

let root;
if (app.get('env') === 'development') {
  root = path.join(__dirname, '../../build');
} else {
  root = path.join(__dirname, '/');
}
app.use(express.static(root));

// catch 404 and forward to error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  next(createError(404));
});

app.get('/coverImg', function (req, res) {
  res.sendFile(__dirname, 'cover.jpg');
});

app.use('/', indexRouter);

app.get('/*', function (req, res) {
  res.cookie('session-token', false);
  // res.cookie("XSRF-TOKEN", req.csrfToken());
  // res.sendFile(path.join(__dirname, "build", "index.html"));
  // res.sendFile("index.html");

  let url;
  if (req.app.get('env') === 'production') {
    url = path.join(__dirname, '/index.html');
  } else {
    url = path.join(__dirname, '../../build', '/index.html');
  }
  // if (!url.startsWith("/app/"))
  //   // we're on local windows
  //   url = url.substring(1);
  res.sendFile(url);
});

setInterval(function () {
  https.get('https://kth9192-portfolio.herokuapp.com/');
}, 600000);

app.listen(process.env.PORT || 3001, () =>
  console.log('Example app listening on port 3001!')
);
