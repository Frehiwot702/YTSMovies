import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";


const Navigation = () => {


  return (
    <nav className='w-full text-white dark_background flex justify-between px-10 py-4 z-20 '>
        <div>
            <h3 className='text-2xl font-bold logo'>YTS.Mx</h3>
        </div>
        <div>
            <ul className='hidden md:flex items-center space-x-10 font-bold text-md'>
                 <li>Home</li>
                 <li>Movies</li>
                 <li>Top Movies</li>
                 <li>Genre</li>
                 <li>Country</li>
                 <li>
                    <button className='font-bold blue_button px-5 py-2 rounded-full text-white '>Sign Up</button>
                 </li>
            </ul>

            <div className='visible md:hidden w-full mx-auto'>
                <button  className=''><IoMdMenu size={25}/></button>
            </div>
        </div>
    </nav>
  )
}

export default Navigation