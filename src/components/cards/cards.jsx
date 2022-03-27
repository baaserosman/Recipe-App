import { CardDiv, MainDiv } from "./CardStyles";
import { useNavigate } from "react-router-dom";

const Cards = ({ recipes }) => {
  const navigate = useNavigate;
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
              alt="img"
            />
            <h3>{recipe["recipe"]["label"]}</h3>
            <button onClick={navigate("/details")}>Details</button>
          </CardDiv>
        );
      })}
    </MainDiv>
  );
};

export default Cards;
