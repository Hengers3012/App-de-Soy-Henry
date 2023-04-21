const http = require("http");
const data = require("./utils/data");
const PORT = 3001;
http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log(req.url);
    try {
      const { url } = req;
      if (url.includes("/rickandmorty/character")) {
        const id = url.split("/").at(-1);
        console.log(id);

        const character = data.find((charact) => charact.id == id);
        console.log(character);

        if (character) {
          res.writeHead(200, { "Content-Type": "application/json" });

          res.end(JSON.stringify(character));
        } else {
          res.writeHead(404, { "Content-Type": "application/json" });

          res.end(
            JSON.stringify({
              error: `The character could not be found with this id: ${id}`,
            })
          );
        }
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  })
  .listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
  });
