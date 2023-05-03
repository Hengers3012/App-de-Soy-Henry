//--------------------------------------------------------------------------------------
//                                    codigo con Express:
//--------------------------------------------------------------------------------------
const express = require("express");
const router = require("./routes/index");
const server = express();
const PORT = 3001;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});

//--------------------------------------------------------------------------------------
//                                    codigo con HTTP:
//--------------------------------------------------------------------------------------
// const http = require("http");
// //const data = require("./utils/data");
// const getCharById = require("../src/controllers/getCharById.js");
// const PORT = 3001;
// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     //dentro del parámetro req.url está el id del personaje
//     console.log(req.url);
//     try {
//       const { url } = req;
//       if (url.includes("/rickandmorty/character")) {
//         const id = url.split("/").at(-1);
//         console.log(id);

//         getCharById(res, id);

//              -----------------------------------------------------------
//                             Reemplazado por getCharById.js
//              -----------------------------------------------------------
//         //   const character = data.find((charact) => charact.id == id);
//         //   console.log(character);

//         //   if (character) {
//         //     res.writeHead(200, { "Content-Type": "application/json" });

//         //     res.end(JSON.stringify(character));
//         //   } else {
//         //     res.writeHead(404, { "Content-Type": "application/json" });

//         //     res.end(
//         //       JSON.stringify({
//         //         error: `The character could not be found with this id: ${id}`,
//         //       })
//         //     );
//         //   }
//              -------------------------------------------------------------

//       }
//     } catch (error) {
//       console.log(error);

//       throw new Error(error);
//     }
//   })
//   .listen(PORT, () => {
//     console.log(`Server on port ${PORT}`);
//   });
