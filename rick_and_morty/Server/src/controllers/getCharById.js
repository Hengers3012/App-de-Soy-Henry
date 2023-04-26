//Aqui estamos implentando el codigo para express
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(res, res) {
  const { id } = req.params;
  axios
    .get(URL + id)
    .then((response) => {
      const character = response.data;
      if (character.error) {
        res.status(404).json({ message: "Not fount" });
      } else {
        const { id, name, gender, species, origin, image, status } = character;
        res.json({ id, name, gender, species, origin, image, status });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: error.message });
    });
}
module.exports = getCharById;

//--------------------------------------------------------------------------------------
//                                    codigo sin Express:
//--------------------------------------------------------------------------------------
// const axios = require("axios");
// const URL = "https://rickandmortyapi.com/api/character/";
// function getCharById(res, id) {
//   axios
//     .get(URL + id)
//     .then((response) => {
//       const { id, name, gender, species, origin, image, status } =
//         response.data;
//       res.writeHead(200, { "Content-Type": "application/json" });
//       //JS --> JSON
//       res.end(
//         JSON.stringify({ id, name, gender, species, origin, image, status })
//       );
//     })
//     .catch((reason) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(reason.message);
//     });
// }
// module.exports = getCharById;
