import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='bg-black'>
        <div className='h-20 flex justify-center gap-290'>
          <div>
            <img className='h-15 mt-2' src="public/bg1.png" alt="" />
          </div>
          <div className=''>
            <ul className='flex text-white gap-10 mt-3'>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header