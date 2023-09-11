var express = require("express");
var router = express.Router();
const authRouter = require("./auth");
const postRouter = require("./posts");

router.get("/", (req, res) => {
  res.render("index", { postList: [] });
});

router.use("/auth", authRouter);
router.use("/posts", postRouter);

module.exports = router;
