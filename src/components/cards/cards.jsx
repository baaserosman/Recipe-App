import { CardDiv, MainDiv, Img } from "./CardStyles";
import { useNavigate } from "react-router-dom";
const Cards = ({ setRecipes, recipes }) => {
  const navigate = useNavigate();
  return (
    <MainDiv>
      {recipes.map((recipe, index) => {
        return (
          <CardDiv key={index}>
            <Img src={recipe["recipe"]["image"]} alt="" />
            <h3>{recipe["recipe"]["label"]}</h3>
            <button onClick={() => navigate("/details", { state: recipe })}>
              Details
            </button>
          </CardDiv>
        );
      })}
    </MainDiv>
  );
};

export default Cards;
