import axios from "axios";
import { ADD_MY_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actionTypes";

export const addMyFavorite = (character) => {
  //-------------------------------------------------------------------------------
  //                Versión con Express y Async-Await (Try Catch)
  //-------------------------------------------------------------------------------
  const endpoint = "http://localhost:3001/rickandmorty/favElement";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_MY_FAVORITE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //-------------------------------------------------------------------------------
  //                       Versión con Express y Promesas
  //-------------------------------------------------------------------------------
  // return (dispatch) => {
  //   axios.post(endpoint, character).then(({ data }) => {
  //     //------------------------------------------------------------------------
  //     //                Versión sin Express en el Server
  //     //------------------------------------------------------------------------
  //     // console.log(character);
  //     // return {
  //     //   type: ADD_MY_FAVORITE,
  //     //   payload: character,
  //     // };

  //     return dispatch({
  //       type: ADD_MY_FAVORITE,
  //       payload: data,
  //     });
  //   });
  // };
};
export const deleteFavorite = (id) => {
  //-------------------------------------------------------------------------------
  //                 Versión con Express y Async-Await (Try Catch)
  //-------------------------------------------------------------------------------
  const endpoint = "http://localhost:3001/rickandmorty/favElement";
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${endpoint}/${id}`);
      console.log({ data });
      return dispatch({
        type: DELETE_FAVORITE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //-------------------------------------------------------------------------------
  //                       Versión con Express y Promesas
  //-------------------------------------------------------------------------------
  // return (dispatch) => {
  //   axios.delete(endpoint).then(({ data }) => {
  //     //------------------------------------------------------------------------
  //     //                Versión sin Express en el Server
  //     //------------------------------------------------------------------------
  //     // return {
  //     //   type: DELETE_FAVORITE,
  //     //   payload: id,
  //     // };

  //     return dispatch({
  //       type: DELETE_FAVORITE,
  //       payload: data,
  //     });
  //   });
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
