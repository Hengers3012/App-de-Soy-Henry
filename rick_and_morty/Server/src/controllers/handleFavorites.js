let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  res.json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  console.log(id);

  myFavorites = myFavorites.filter(
    (favElement) => parseInt(favElement.id) !== parseInt(id)
  );
  res.json(myFavorites);
};
module.exports = { postFav, deleteFav };
