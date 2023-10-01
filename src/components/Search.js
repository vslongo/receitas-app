import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Search.css'; // Importe o arquivo CSS

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function searchRecipes() {
      if (!searchTerm) {
        setSearchResults([]);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSearchResults(data.meals);
      } catch (error) {
        console.error('Error searching recipes:', error);
      } finally {
        setLoading(false);
      }
    }

    searchRecipes();
  }, [searchTerm]);

  return (
    <div className="search">
      <h2>Search Recipes</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="search-results">
        {loading ? (
          <p>Loading...</p>
        ) : (
          searchResults.map((recipe) => (
            <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal} className="recipe-card">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <p className="recipe-name">{recipe.strMeal}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Search;
