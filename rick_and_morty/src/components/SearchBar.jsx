export default function SearchBar(props) {
  return (
    <div>
      <input id="search" type="search" />
      <button onClick={props.onSearch}>Agregar</button>
    </div>
  );
}
//Matias cabalo
