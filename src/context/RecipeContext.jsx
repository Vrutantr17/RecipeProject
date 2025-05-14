import React, { createContext, useEffect, useState } from 'react'
import data from "../Recipes.json"

export const RecipeContext = createContext();

// export const RecipeProvider = ({ children }) => {
//     const [recipes, setRecipes] = useState([]);
  
//     useEffect(() => {
//         // console.log(data);
//       setRecipes(data);
//     }, []);
//     // console.log(recipes,"from Context");
  
//     return (
//       <RecipeContext.Provider value={{ recipes }}>
//         {children}
//       </RecipeContext.Provider>
//     );
//   };