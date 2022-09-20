const cors = require('cors');
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
//const bodyParser = require('body-parser');

const app = express();

const stickers = require("./api/stickers");
app.use(cors())
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", stickers);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {},
  });
});

app.listen(5000);
module.exports = app;
