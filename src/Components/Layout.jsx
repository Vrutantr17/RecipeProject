import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext'; // Import RecipeContext
import { useState, useEffect } from 'react';
import data from "../Recipes.json";

const Layout = () => {
  const [recipes, setRecipes] = useState([]);
  // console.log(object);
  
  useEffect(() => {
    setRecipes(data);
  }, []);
  
  return (
    <RecipeContext.Provider value={{ recipes, setRecipes }}> {/* Use RecipeContext.Provider here */}
      <Header />
      <Outlet />
      <Footer />
    </RecipeContext.Provider>
  );
};

export default Layout;