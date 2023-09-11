const express = require("express");
const router = express.Router();

// /auth/login
router.get("/login", (req, res) => {
  res.render("login");
});

// /auth/register
router.get("/register", (req, res) => {
  res.render("register");
});

module.exports = router;
