const usuarios = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;

  const usuario = usuarios.find(
    (usuario) => usuario.email === email && usuario.password === password
  );

  if (usuario) {
    res.status(200).json({ access: true });
  } else {
    res.status(200).json({ access: false });
  }
};

module.exports = login;
