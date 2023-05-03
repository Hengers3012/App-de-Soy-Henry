const { postFav, deleteFav } = require("./handleFavorites");
const getCharById = require("./getCharById");
const login = require("./login");

module.exports = (getCharById, login, postFav, deleteFav);
