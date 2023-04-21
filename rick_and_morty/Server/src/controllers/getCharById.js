const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";
function getCharById(res, id) {
  axios
    .get(URL + id)
    .then((response) => {
      const { id, name, gender, species, origin, image, status } =
        response.data;
      res.writeHead(200, { "Content-Type": "application/json" });
      //JS --> JSON
      res.end(
        JSON.stringify({ id, name, gender, species, origin, image, status })
      );
    })
    .catch((reason) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(reason.message);
    });
}
module.exports = getCharById;
