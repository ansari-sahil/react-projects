import { useState } from "react";
import Header from "./components/Header";
import Recipe from "./components/Recipe";

const appId = `44ffb030`;
const appKey = `cc4a95efa787c69cb02f7c4ab23e82c9`;

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(false);

  const handleSearch = async (query) => {
    try {
      setLoader(true);
      setRecipes([]);
      const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`;
      const response = await fetch(url);
      const {hits} = await response.json();
      setRecipes(hits);
      console.log(hits)
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div>
      <Header loader={loader} handleSearch={handleSearch} />
      {recipes.map(({ recipe }, index) => 
        <Recipe recipe={recipe} />
      )}
    </div>
  );
}
