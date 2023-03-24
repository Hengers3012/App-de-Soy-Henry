import Card from "./Card";

export default function Cards(props) {
  return props.characters.map((element) => {
    return (
      <Card
        name={element.name}
        species={element.species}
        gender={element.gender}
        image={element.image}
        onClose={function () {}}
      />
    );
  });
}
