import axios from "axios";
import { ADD_MY_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actionTypes";

export const addMyFavorite = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/favElement";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_MY_FAVORITE,
        payload: data,
      });
    });
  };

  //-------------------------------------------------------------------------------
  //                Versión sin Express en el Server
  //-------------------------------------------------------------------------------
  // console.log(character);
  // return {
  //   type: ADD_MY_FAVORITE,
  //   payload: character,
  // };
};
export const deleteFavorite = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/favElement/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: DELETE_FAVORITE,
        payload: data,
      });
    });
  };

  //-------------------------------------------------------------------------------
  //                Versión sin Express en el Server
  //-------------------------------------------------------------------------------
  // return {
  //   type: DELETE_FAVORITE,
  //   payload: id,
  // };
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
