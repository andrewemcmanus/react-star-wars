
function StarshipPage(props) {
  // const starshipModel = props.starships.model;
  // const starshipName = props.starships.name;

  return (
    <div>
      <p>Name: {props.starships.name}</p>
      <p>Model:{props.starships.model}</p>
    </div>
  )
}
export default StarshipPage;
