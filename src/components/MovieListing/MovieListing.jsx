import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';
import Slider from "react-slick";
import { Settings } from '../../common/settings';
 
const MovieListing = () => {
  
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
      let renderMovies, renderShows = '';

      renderMovies =
      movies.Response === "True" ? (
        movies.Search.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))
      ) : (
        <div className="movies-error">
          <h3>{movies.Error}</h3>
        </div>
      );

      renderShows =
      shows.Response === "True" ? (
        shows.Search.map((show, index) => (
          <MovieCard key={index} data={show} />
        ))
      ) : (
        <div className="movies-error">
          <h3>{shows.Error}</h3>
        </div>
      );
  return (
    <div className='movies-wrapper'>
      <div className='movie-listing'>
        <h4>Movies</h4>
        <div className='movie-container'>
          <Slider {...Settings}>
            { renderMovies }
          </Slider>
        </div>
      </div>

      <div className='show-listing'>
        <h4>Shows</h4>
        <div className='show-container'>
          <Slider { ...Settings}>
            { renderShows }
          </Slider>
        </div>
      </div>

    </div>
  )
}

export default MovieListing