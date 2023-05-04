const express = require("express");
<<<<<<< HEAD

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
=======
const {
  getCharById,
  login,
  postFav,
  deleteFav,
} = require("../controllers/index.js");
>>>>>>> c53f9e5de852223e731f10c6673cbefab68f97a5
const router = express.Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
