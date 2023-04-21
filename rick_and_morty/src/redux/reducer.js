import { ADD_MY_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actionTypes";
const initialState = {
  misFavoritas: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MY_FAVORITE:
      return {
        ...state,
        allCharacters: [...state.allCharacters, payload],
        misFavoritas: [...state.allCharacters, payload],
      };
    case DELETE_FAVORITE:
      const filtered = state.misFavoritas.filter(
        (character) => character.id !== payload
      );
      return {
        ...state,
        misFavoritas: filtered,
      };

    case FILTER:
      const filterForGender = [...state.allCharacters].filter(
        (charact) => charact.gender.toLowerCase() === payload.toLowerCase()
      );
      return {
        ...state,
        misFavoritas: filterForGender,
      };

    case ORDER:
      const filterForOrder = [...state.allCharacters].sort((x, y) => {
        if (x.id > y.id) {
          return payload === "Ascendente" ? 1 : -1;
        } else if (x.id < y.id) {
          return payload === "Descendente" ? 1 : -1;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        misFavoritas: filterForOrder,
      };
    default:
      return { ...state };
  }
};

export default reducer;
