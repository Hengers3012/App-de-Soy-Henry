import { connect } from "react-redux";
import Card from "../Card/Card.jsx";
import { Div } from "../Assets/StyleComponets.js";

function Favorites({ misFavoritas }) {
  return (
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
  );
}

const mapStateToProps = (state) => {
  return {
    misFavoritas: state.misFavoritas,
  };
};

export default connect(mapStateToProps, null)(Favorites);
