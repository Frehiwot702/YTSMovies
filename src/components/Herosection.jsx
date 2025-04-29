import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopRatingMovie } from '../store/slices/movielistSlice';
import { FaStar } from "react-icons/fa6";

const Herosection = () => {

    const dispatch = useDispatch()
    const { topRating } = useSelector(state => state.movies);


    useEffect( ()=> {
        dispatch(fetchTopRatingMovie())
    }, [dispatch, topRating])

  return (
    <>
        <div className='relative w-full h-screen'>
            <img
                className='w-full h-full object-cover inset-0'
                src={topRating?.large_cover_image}
                alt="Top Rated Movie"
            />
            <div className='absolute w-full h-full bottom-0 left-0 right-0 top-0 flex flex-col justify-center gap-4 z-10  herosection-bg bg-opacity-50 p-4 text-white'>
                <div className='md:w-3/6 space-y-5 p-5 '>
                    <h3 className='text-white text-5xl md:text-6xl font-bold uppercase'>{topRating?.title}</h3>

                    <div className='flex md:w-3/6 justify-between font-bold'>
                        <div className='flex items-center space-x-2'><FaStar fill='yellow'/><span>{topRating?.rating}</span></div>
                        <h3>{topRating?.runtime} min</h3>
                        <h3 className='font-bold'>{topRating?.language}</h3>
                        <h3>{topRating.year}</h3>
                    </div>
                    <div>
                        {topRating?.genres?.map((genre) => (
                            <span 
                                key={genre}
                                className='text-sm'
                            >{genre}</span>
                        ))}
                    </div>
                    <h4 className='text-sm'>{topRating?.description_full} It Didint have description so i usedLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor, nisi id lacinia pulvinar, felis nulla interdum dolor, quis vestibulum elit leo et nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor, nisi id lacinia pulvinar, felis nulla interdum dolor, quis vestibulum elit leo et nibh.</h4>
                    
                    <div className='flex space-x-10'>
                        <button className='blue_button px-5 py-2 rounded-full text-lg font-bold'>
                            Watch Now
                        </button>
                        <button className='text-black border border-white bg-transparent text-white px-5 py-2 rounded-full text-lg font-bold'>
                           Trailer
                        </button>
                    </div>
                   
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Herosection