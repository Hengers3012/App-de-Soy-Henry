import { ADD_MY_FAVORITE, DELETE_FAVORITE } from "./actionTypes";
const initialState = {
  misFavoritas: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MY_FAVORITE:
      return {
        ...state,
        misFavoritas: [...state.misFavoritas, payload],
      };
    case DELETE_FAVORITE:
      const filtered = state.misFavoritas.filter(
        (character) => character.id !== payload
      );
      return {
        ...state,
        misFavoritas: filtered,
      };

    default:
      return { ...state };
  }
};

export default reducer;
