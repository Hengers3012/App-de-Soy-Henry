import { connect } from "react-redux";
import Card from "../Card/Card.jsx";
import { Div } from "../Assets/StyleComponets.js";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions.js";

function Favorites({ misFavoritas }) {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "order":
        return dispatch(orderCards(value));
      case "filter":
        return dispatch(filterCards(value));

      default:
        break;
    }
  };

  return (
    <div>
      <div>
        <select name="order" onChange={handleClick}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select
          name="filter"
          onChange={(event) => {
            dispatch(filterCards(event.target.value));
          }}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <Div>
        {misFavoritas?.map(({ id, name, species, image, gender }) => (
          <Card
            id={id}
            key={id}
            name={name}
            species={species}
            image={image}
            gender={gender}
          />
        ))}
      </Div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    misFavoritas: state.misFavoritas,
  };
};

export default connect(mapStateToProps, null)(Favorites);
