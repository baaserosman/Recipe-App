import { MainDiv, CardDiv, Img } from "../../components/cards/CardStyles";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <MainDiv>
      <CardDiv>
        <Img src={state.recipe.image} alt="" />
        <h3>{state.recipe.label}</h3>
        <p>Region:{state.recipe.cuisineType[0]}</p>
      </CardDiv>
    </MainDiv>
  );
};

export default Details;
