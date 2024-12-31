import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
const Home = ({ recipes }) => {
  const navigate = useNavigate();

  return (
    <div className="home-content">
      <h1 style={{ textAlign: "center", margin: "60px 0 0" }}>Recipe Viewer</h1>
      <div className="outer-grid">
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <div className="recipe-card" key={recipe.id}>
              {recipe.image && (
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  // No fallback image logic, assuming recipe.image is valid
                />
              )}
              <h2>{recipe.name}</h2>
              {/* <h3>Ingredients:</h3>
              <ul>
                {recipe.description.split(",").map((ingredient, index) => (
                  <li key={index}>{ingredient.trim()}</li>
                ))}
              </ul> */}
              <button onClick={() => navigate(`/view/${recipe.id}`)}>View More</button>
            </div>
          ))}
        </div>
      </div>
      <footer className="foot">
        <p>Copyright: © 2024 Recipe Viewer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
