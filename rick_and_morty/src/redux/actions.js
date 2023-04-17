import { ADD_MY_FAVORITE, DELETE_FAVORITE } from "./actionTypes";

export const addMyFavorite = (character) => {
  console.log(character);
  return {
    type: ADD_MY_FAVORITE,
    payload: character,
  };
};
export const deleteFavorite = (id) => {
  //Logica de Delete Favorite
  return {
    type: DELETE_FAVORITE,
    payload: id,
  };
};
