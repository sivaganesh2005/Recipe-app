import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateRecipe = ({ recipes, onUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeToUpdate = recipes.find((recipe) => recipe.id === id);

  const [name, setName] = useState(recipeToUpdate?.name || "");
  const [description, setDescription] = useState(recipeToUpdate?.description || "");
  const [procedure, setProcedure] = useState(recipeToUpdate?.procedure || "");
  const [image, setImage] = useState(recipeToUpdate?.image || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onUpdate(id, { name, description, procedure, image });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Update Recipe</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <textarea
        value={procedure}
        onChange={(e) => setProcedure(e.target.value)}
        required
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default UpdateRecipe;