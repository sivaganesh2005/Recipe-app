import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddRecipe from "./components/AddRecipe";
import ManageRecipe from "./components/ManageRecipe";
import UpdateRecipe from "./components/UpdateRecipe";
import ViewRecipe from "./components/ViewRecipe";
import { db } from "./firebase";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const querySnapshot = await getDocs(collection(db, "recipes"));
      const recipesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecipes(recipesData);
    };

    fetchRecipes();
  }, []);

  const addRecipe = async (recipe) => {
    const docRef = await addDoc(collection(db, "recipes"), recipe);
    setRecipes([...recipes, { id: docRef.id, ...recipe }]);
  };

  const deleteRecipe = async (id) => {
    await deleteDoc(doc(db, "recipes", id));
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const updateRecipe = async (id, updatedRecipe) => {
    await updateDoc(doc(db, "recipes", id), updatedRecipe);
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === id ? { id, ...updatedRecipe } : recipe
      )
    );
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/add" element={<AddRecipe onAdd={addRecipe} />} />
        <Route
          path="/manage"
          element={<ManageRecipe recipes={recipes} onDelete={deleteRecipe} />}
        />
        <Route
          path="/update/:id"
          element={<UpdateRecipe recipes={recipes} onUpdate={updateRecipe} />}
        />
        <Route path="/view/:id" element={<ViewRecipe recipes={recipes} />} />
      </Routes>
    </Router>
  );
};

export default App;