import React, { useContext, useEffect, useState } from 'react'
// import recipes from '../Recipes.json'
import { useParams } from 'react-router-dom'
import { RecipeContext } from '../context/RecipeContext';

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipeDetails, setRecipeDetails] = useState({})
    const {recipes} = useContext(RecipeContext)


    useEffect(() => {
        const filteredRecipe = recipes.find((recipe) => recipe.id === id)
        setRecipeDetails(filteredRecipe);


    }, [id])
    return (
        recipeDetails && (
            <div className=''>
                <img className='h-70 w-100 rounded-2xl ml-20 mt-10' src={recipeDetails.image} alt="" />
                <h3 className='ml-20 font-extrabold mt-10 text-2xl text-[30px]'>{
                    recipeDetails.title}</h3>

                <h3 className='ml-20 font-normal mt-5 text-2xl'>{
                    recipeDetails.description }</h3>


                <h3 className='ml-20 font-extrabold mt-10 text-2xl text-amber-900'>Steps:</h3>
                <ul className='mt-5 list-disc'>
                    {recipeDetails.steps && recipeDetails.steps.map(element => {
                        return (
                            <li className='ml-25 mt-2 font-bold'>{element}</li>
                        )
                    }

                    )}
                </ul>
                <h3 className='ml-20 font-extrabold mt-10 text-2xl text-blue-800'>Ingredients:</h3>
                <ul className='list-disc'>
                    {recipeDetails.ingredients && recipeDetails.ingredients.map(element => {
                        return (
                            <li className='ml-25 mt-2 font-bold'>{element}</li>
                        )
                    }

                    )}
                </ul>
                <h3 className='ml-20 font-bold mt-10 text-2xl text-red-600'>Cooking Time: {
                    recipeDetails.cookingTime
                }

                </h3>




            </div>
        )
    )
}

export default RecipeDetails