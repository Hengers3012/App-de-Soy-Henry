const express = require("express");

// const { login } = require("../controllers/login.js");
// const { getCharById } = require("../controllers/getCharById.js");
// const {
//   getCharById,
//   login,
//   postFav,
//   deleteFav,
// } = require("../controllers/index");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const router = express.Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
