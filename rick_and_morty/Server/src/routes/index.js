const express = require("express");
const router = express.Router();

// const { login } = require("../controllers/login.js");
// const { getCharById } = require("../controllers/getCharById.js");
const {
  getCharById,
  login,
  postFav,
  deleteFav,
} = require("../controllers/index");

router.get("/character/:id", getCharById);
// router.get("/login", login);
// router.post("/favElement", postFav);
// router.delete("/favElement/:id", deleteFav);

module.exports = router;
