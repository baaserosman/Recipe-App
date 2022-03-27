import { CardDiv, MainDiv } from "./CardStyles";

const Cards = ({ setRecipes, recipes }) => {
  return (
    <MainDiv>
      {recipes.map((recipe) => {
        return (
          <CardDiv key={recipe["recipe"]["calories"]}>
            <img
              style={{
                height: "15rem",
                width: "12rem",
                borderRadius: "15px",
                boxShadow: "3px 3px 10px 3px black",
              }}
              src={recipe["recipe"]["image"]}
              alt=""
            />
            <h3>{recipe["recipe"]["label"]}</h3>
            <button>Details</button>
          </CardDiv>
        );
      })}
    </MainDiv>
  );
};

export default Cards;
