import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RecipeList.css';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRecipes(data.meals);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      }
    }

    fetchRecipes();
  }, []);

  return (
    <div className="recipe-list-container">
      <h2>Recipes</h2>
      <div className="recipe-list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          recipes.map((recipe) => (
            <Link to={`/recipe/${recipe.idMeal}`} className="recipe-card" key={recipe.idMeal}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <p className="recipe-name">{recipe.strMeal}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default RecipeList;
