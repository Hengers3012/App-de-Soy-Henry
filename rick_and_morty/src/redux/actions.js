import { ADD_MY_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actionTypes";

export const addMyFavorite = (character) => {
  console.log(character);
  return {
    type: ADD_MY_FAVORITE,
    payload: character,
  };
};
export const deleteFavorite = (id) => {
  return {
    type: DELETE_FAVORITE,
    payload: id,
  };
};
export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};
export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
