import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import user from '../../images/user.png';
import "./Header.scss";

function Header() {
  const [term , setTerm] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if(term === '') return alert('search something !');
    // console.log(term);
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('');
  }
  return (
    <div className='header'>
      <Link to='/'>
          <div className='logo'>
           <span className='alias'>i</span> Movie App
          </div>
      </Link>

    <div className='search-bar'>
      <form onSubmit={submitHandler}>
      <input 
        type='text'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search a movie or a show"
        />
        <button type='submit'><i className='fa fa-search'></i></button>
      </form>
    </div>

    <div className='user-image'>
      <img src={ user } alt='user' />
    </div>
    </div>
  )
}

export default Header
