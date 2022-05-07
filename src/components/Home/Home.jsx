import React, { useEffect, useState } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { fetchAsyncMovies, fetchAsyncShows, getLoader } from '../../features/movies/movieSlice';
import { useDispatch } from 'react-redux';
import { useSelector} from 'react-redux';
import Loader from '../../common/Loader';


function Home() {
  const dispatch = useDispatch();
  const movieText = 'harry';
  const showText = 'friends';
  const loader = useSelector(getLoader);
  
  
  useEffect(() => {
    
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
    // receive loader state from redux store
    
    // console.log(loader);

  }, [dispatch]);

  return (
    <div>
    <div className='banner-img'></div>
    { loader ? (<div className='loader'><Loader/></div>) : <MovieListing /> }
       {/* <>
       <MovieListing/> 
       </> */}
    </div>
  )
}

export default Home