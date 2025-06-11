const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  const data = {
    title: "Hello!",
    message: "フォームを入力してください。",
    id: "",
    pass: "",
  };
  res.render("hello", data);
});

router.post("/", function (req, res, next) {
  const data = {
    title: "Hello!",
    message: req.body.id + "さん(パスワード" + req.body.pass.length + "文字)",
    id: req.body.id,
    pass: req.body.pass,
  };
  res.render("hello", data);
});

module.exports = router;
