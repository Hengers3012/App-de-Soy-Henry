import Card from "../Card/Card.jsx";

export default function Cards(props) {
  const { characters } = props;
  return characters.map(({ id, name, species, gender, image }) => (
    <Card
      key={id}
      name={name}
      species={species}
      gender={gender}
      image={image}
      //onClose={() => window.alert("Emulamos que se cierra la card")}
      onClose={() => props.onClose(id)}
    />
  ));
}
