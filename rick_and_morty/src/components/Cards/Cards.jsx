import Card from "../Card/Card.jsx";
import { Div } from "../Assets/StyleComponets.js";

export default function Cards(props) {
  const { characters } = props;
  // characters --> [{}], onClose
  return (
    <Div>
      {characters.map(({ id, name, species, gender, image }) => (
        <Card
          id={id}
          key={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          onClose={() => props.onClose(id)}
        />
      ))}
    </Div>
  );
}
