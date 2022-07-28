import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../apis/movieApi";
import { API_KEY } from "../../apis/MovieApiKey";

const movieTitle = "marvel";
const serieTitle = "Dragon Ball";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const response = await movieApi.get(`?apikey=${API_KEY}&s=${movieTitle}&type=movie`);
    return response.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async () => {
    const response = await movieApi.get(`?apikey=${API_KEY}&s=${serieTitle}&type=series`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  series: {},
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
    }
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export default movieSlice.reducer;
