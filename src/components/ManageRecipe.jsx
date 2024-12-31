import React from "react";
import { useNavigate } from "react-router-dom";
import '../uav.css'
const ManageRecipe = ({ recipes, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Manage Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <span>{recipe.name}</span>
            <button onClick={() => navigate(`/update/${recipe.id}`)}>Update</button>
            <button onClick={() => navigate(`/view/${recipe.id}`)}>View</button>
            <button className="del" onClick={() => onDelete(recipe.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageRecipe;
