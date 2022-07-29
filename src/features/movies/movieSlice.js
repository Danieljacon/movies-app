import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../apis/movieApi";
import { API_KEY } from "../../apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(`?apikey=${API_KEY}&s=${term}&type=movie`);
    return response.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async (term) => {
    const response = await movieApi.get(`?apikey=${API_KEY}&s=${term}&type=series`);
    return response.data;
  }
);

export const fetchAsyncMovieOrSerieDetail= createAsyncThunk(
  "movies/fetchAsyncMovieOrSerieDetail",
  async (id) => {
    const response = await movieApi.get(`?apikey=${API_KEY}&i=${id}&plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  series: {},
  movieOrSerieDetail: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      return {
        ...initialState
      }
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        movies: payload,
      };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Algum erro ocorreu");
    },
    [fetchAsyncSeries.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        series: payload,
      };
    },
    [fetchAsyncMovieOrSerieDetail.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        movieOrSerieDetail: payload,
      };
    }
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getMovieOrSerieDetail = (state) => state.movies.movieOrSerieDetail;
export default movieSlice.reducer;
