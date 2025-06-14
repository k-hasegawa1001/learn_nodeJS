var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

const ses_opt = {
  secret: "test key",
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60 * 60 * 24 },
};
app.use(session(ses_opt));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// ルーティング
app.use("/", indexRouter);
app.use("/users", usersRouter);

const helloRouter = require("./routes/hello");
app.use("/hello", helloRouter);

const dbRouter = require("./routes/db");
app.use("/db", dbRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

console.log("http://localhost:3000/hello\n");
console.log("http://localhost:3000/db\n");

module.exports = app;
