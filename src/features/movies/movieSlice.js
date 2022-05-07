import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import MovieApi from '../../common/Apis/MovieApi';
import { APIkey } from '../../common/Apis/MovieApiKey';


export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies', async (term) => {
    const response = await MovieApi
            .get(`?apikey=${APIkey}&s=${term}&type=movie`)
            return response.data;
  }
)

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows', async (term) => {
    const response = await MovieApi
            .get(`?apikey=${APIkey}&s=${term}&type=series`)
            return response.data;
  }
)

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  'movies/fetchAsyncMovieOrShowDetail', async (id) => {
    const response = await MovieApi
            .get(`?apikey=${APIkey}&i=${id}&plot=full`)
            return response.data;
  }
)


const initialState = {
  movies: {},
  shows: {},
  movieOrShowDetail: {},
  loader: true
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovieOrShow : ( state ) => {
      state.movieOrShowDetail = {};
    }
  },

  extraReducers : {
    [fetchAsyncMovies.pending] : () => {
      console.log('pending');
      // console.log(state.loader);
    },
    [fetchAsyncMovies.fulfilled] : (state, {payload}) => {
      console.log('fetched successfully');
      return { ...state, movies : payload, loader : false };
      
    },
    [fetchAsyncMovies.rejected] : (state) => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled] : (state, {payload}) => {
      console.log('fetched successfully');
      // state.loader = false;
      return { ...state, shows : payload, loader : false };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled] : (state, {payload}) => {
      console.log('fetched successfully');
      // state.loader = false;
      return { ...state, movieOrShowDetail : payload, loader : false };
    },
  }
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShowDetail = (state) => state.movies.movieOrShowDetail;
export const getLoader = (state) => state.movies.loader;

export default movieSlice.reducer;
