import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/add">Add Recipe</Link>
    <Link to="/manage">Manage Recipes</Link>
  </nav>
);

export default NavBar;