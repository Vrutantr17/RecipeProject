import React, { useEffect, useState } from 'react'
import bgImage from '/foodimg3.jpg'
import data from '../Recipes.json'
import Recipes from './Recipes'

const Home = () => {
  
  return (
    <>
      <div className='h-100 rounded-[10px] m-20 relative'>

        <div className='absolute text-white ml-10 mt-55'>
          <p className='text-[30px] text-orange-600 font-extrabold'>Trending Now</p>
          <p className='text-[20px]'>Ram's Famous Dosa</p>
          <p>with Cheese</p>
          <p className='font-bold text-[20px]'>By Ram's Kitchen</p>
        </div>

        <div className='bg-blend-darken rounded-[10px]' style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',  // or any height
          width: '100%'

        }}>
        
        </div>

      </div>

      <div className='flex justify-center items-center gap-17 '>
        <div className='w-45 h-10 text-center rounded-[7px] p-1 text-[21px] bg-orange-500 text-white'>Recipes & Menu</div>
        <div className='w-45 h-10 text-center rounded-[7px] p-1 text-[21px] bg-green-600  text-white'>Share Your Recipe</div>
        <div className='w-45 h-10 text-center rounded-[7px] p-1 text-[21px] bg-red-400  text-white'>Custom Meal Plan</div>
        <div className='w-50 h-10 text-center rounded-[7px] p-1 text-[21px] bg-yellow-500  text-white'>Create Grocery Store</div>
        <div className='w-55 h-10 text-center rounded-[7px] p-1 text-[21px] bg-red-500  text-white'>Cooking Tips & Tricks</div>
      </div>

      <Recipes  />
    </>
  )
}

export default Home