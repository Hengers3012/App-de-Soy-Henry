const express = require("express");
const router = express.Router();

const { login } = require("../controllers/login.js");
const { getCharById } = require("../controllers/getCharById.js");
const { postFav, deleteFav } = require("../controllers/handleFavorites.js");

router.get("/character/ :id", getCharById);
router.get("/login", login);
router.post("/favElement", postFav);
router.delete("/favElement", deleteFav);

module.exports = router;
