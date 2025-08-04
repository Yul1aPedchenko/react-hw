import { GlobalStyle } from "./Styles/GlobalStyle";
import { CardWrap } from "./Styles/RecipeCard.js";
import { RecipeCard } from "./RecipeCard/RecipeCard";
import { recipes } from "../../../dataBase/hw5/data.js";
export const Hw5 = () => {
  return (
    <>
      <GlobalStyle />
      <CardWrap>
        {recipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>;
        })}
      </CardWrap>
    </>
  );
};
