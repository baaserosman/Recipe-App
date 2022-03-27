import { HeaderContainer, MainHeader } from "./HeaderStyles";
import Form from "./Form";

const Header = ({
  setQuery,
  getData,
  setSelectedMealType,
  mealType,
  query,
}) => {
  return (
    <HeaderContainer>
      <MainHeader>Food App</MainHeader>
      <Form
        query={query}
        setQuery={setQuery}
        getData={getData}
        setSelectedMealType={setSelectedMealType}
        mealType={mealType}
      />
    </HeaderContainer>
  );
};

export default Header;
