import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../view.css'; // Optional, if keeping external CSS specific to this component

const ViewRecipe = ({ recipes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div className="view-recipe">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <h2>Ingredients</h2>
      <p>{recipe.description}</p>
      <h2>Procedure</h2>
      <p>{recipe.procedure}</p>
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default ViewRecipe;
