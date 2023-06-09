const express = require("express");

// Otra Forma de Realizar las importaciones de los componentes:

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
router.post("/favElement", postFav);
router.delete("/favElement/:id", deleteFav);

module.exports = router;
