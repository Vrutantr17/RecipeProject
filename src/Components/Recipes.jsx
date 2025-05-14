import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { RecipeContext } from '../context/RecipeContext';

const Recipes = () => {
   const {recipes} =  useContext(RecipeContext)
   console.log(recipes,"from recipes.jsx");
  return (
    <>
    <h3 className='bg-red-400 mt-15 ml-10 font-extrabold text-[25px]'>Foods & Refreshments</h3>
    <section className='grid grid-cols-4 gap-7 mx-10 mt-15' >
        {
            recipes.slice(0,8).map((element,index)=>{
                return <Card key={index}  element={element} />

            })
        }
    </section>

    <h3 className='font-extrabold text-[25px] ml-10 mt-10 bg-red-400'>Recommended Recipes</h3>
    <section className='grid grid-cols-4 gap-7 mx-10 mt-10'>

       
    {
            recipes.slice(8).map((element,index)=>{
                return <Card key={index}  element={element} />

            })
        }

    </section>

    </>
    
    
  )
}

export default Recipes

const Card = ({element}) => {
    return(
        
          
             <Link to={`/recipe/${element.id}`}>
             <img src={element.image} alt= {element.title} className='rounded-2xl h-64 w-full' />
            <h4 className='w-full font-bold ml-5'>{element.title}</h4>
            <h4 className='font-medium ml-5 text-orange-700' >{element.cookingTime}</h4>
             </Link>
            
          
        
    )
}