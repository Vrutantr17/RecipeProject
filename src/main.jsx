import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import React from 'react'
import RecipeDetails from './Components/RecipeDetails.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="/recipe/:id"element={<RecipeDetails/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>

<RouterProvider router={router}/>

   
  </StrictMode>,
)
