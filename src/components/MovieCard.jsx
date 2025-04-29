import React from 'react'
import { FaStar } from "react-icons/fa6";

const MovieCard = ({movie}) => {

  return (
    <div className='group transition-transform duration-300 hover:scale-125 hover:cursor-pointer' key={movie.id}>
        <img
            className='object-cover rounded-md'
            src={movie?.medium_cover_image}/>
        <p className='text-md font-bold w-full movie_titles_clamp py-3'>{movie?.title}</p>

        <div className='flex items-center space-x-3'> 
            <FaStar fill='yellow'/> 
            <span>{movie?.rating}</span>
        </div>
        
        <div className='w-full flex justify-between py-2 font-bold text-sm opacity-50'>
            <h3>{movie.year}</h3>
            <h3>{movie.runtime} min</h3>
        </div>
    </div>
  )
}

export default MovieCard