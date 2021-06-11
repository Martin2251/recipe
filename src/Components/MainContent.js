import React, { useState, useEffect } from "react";
import RecipeCard from "../RecipeCard";
import "../App.css";

function MainContent() {
  // useEffect and useState
  const [recipes, setRecipes] = useState([]); // keep stuff in memory for us to use it
  const [search, setSearch] = useState("");
  const callApiKey = "4c3b528046fe44a69c3ced7c2216d688";

  // effect that executes when user lands on the page!!!

  useEffect(() => {
    // 1. get some recipes by searching for "vegan"
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=vegan&addRecipeInformation=true&apiKey=${callApiKey}`
    )
      .then((response) => response.json())

      .then((data) => {
        // 2. set the state "recipes" to the data we get from the "vegan" search
        setRecipes(data.results);
        // 3. react "refresh" the UI and shows the recipes because of the recipes.map
      });
  }, []);

  function getRecipes(event) {
    console.log(event);
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${search}&addRecipeInformation=true&apiKey=${callApiKey}`
    )
      .then((response) => response.json())

      .then((data) => {
        setRecipes(data.results);
      });
    console.log(recipes);
  }
  return (
    <div className="container">
      <h1 className="title">Recipe App</h1>
      <div className="container-search">
        <input
          id="search-bar"
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          placeholder="find your next recipe"
        />
        <button className="search-btn" onClick={getRecipes}>
          Search
        </button>
      </div>
      <div className="container-recipes">
        {recipes.map((recipe) => (
          <RecipeCard
            title={recipe.title}
            image={recipe.image}
            id={recipe.id}
          ></RecipeCard>
        ))}
      </div>
    </div>
  );
}

export default MainContent;
