const express = require("express");
const router = express.Router();

router.get("/upload", (req, res) => {
  res.render("upload");
});

router.get("/:id", (req, res) => {
  res.render("detail");
});

router.get("/update/:id", (req, res) => {
  res.render("update");
});

module.exports = router;
