import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkMovieUpdates, fetchMovieList, fetchTopRatingMovie } from '../store/slices/movielistSlice';
import Navigation from '../components/Navigation';
import '../App.css'
import MovieCard from '../components/MovieCard';
import { LuLoader } from "react-icons/lu";

const MovieLists = () => {


    const dispatch = useDispatch();
    const { moviesList, loading, refreshing } = useSelector(state => state.movies);

    useEffect( ()=> {
        dispatch(fetchMovieList())

        const interval = setInterval(() => {
            dispatch(checkMovieUpdates());
            console.log('refreshing')
            if(refreshing){
                dispatch(fetchMovieList()) 
                dispatch(fetchTopRatingMovie())
            }
        }, 10000);  
      
        return () => clearInterval(interval);

    }, [dispatch, refreshing])

  return (
    <div className='w-full background_dark'>
        
        {(refreshing || loading) && 
            <p className="absolute w-full h-screen animate-spin duration-100 z-30 flex left-0 right-0 justify-center m-auto items-center"><LuLoader fill='gray' size={100}/></p>}
        
        <p className='text-sm opacity-50 p-5 md:p-16 text-center '>A quick search on Google can lead to dozens of free movie streaming websites. However, don't jump in any link you see, as most of them are full of ads and malware. Prevent your phone or laptop from risks by streaming at YTSMx - A Free movies streaming website that give you access to millions of hd movies online and tv series online.</p>
        
        <h3 className='text-3xl font-bold p-5 md:px-16'>Trending </h3>
        <div className='w-full grid grid-cols-3 gap-5 p-5 md:grid-cols-5 lg:grid-cols-7 md:gap-8 lg:gap-10 md:p-16'>
                { moviesList?.map((movie) => (
                        <MovieCard movie = {movie}/>
                    ))
                    
                } 
        </div>
       
    </div>
  )
}

export default MovieLists