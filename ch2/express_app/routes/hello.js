const express = require("express");
const { route } = require(".");
const router = express.Router();

router.get("/", function (req, res, next) {
  if (req.session.comments == undefined) {
    req.session.comments = [];
  }
  const data = {
    title: "Hello!",
    message: "フォームを入力してください。",
    comments: req.session.comments,
  };
  res.render("hello", data);
});

router.post("/", function (req, res, next) {
  req.session.comments.unshift(req.body.comment);
  const data = {
    title: "Hello!",
    message: "※コメントの保存",
    comments: req.session.comments,
  };
  res.render("hello", data);
});

router.post("/ajax", function (req, res, next) {
  const result = {
    id: req.body.id,
    pass: req.body.pass,
    message: "こんにちは、" + req.body.id + "さん！",
  };
  res.send(result);
});

module.exports = router;
