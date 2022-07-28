import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../apis/movieApi";
import { API_KEY } from "../../apis/MovieApiKey";

const movieTitle = "marvel";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const response = await movieApi.get(`?apikey=${API_KEY}&s=${movieTitle}`);
    return response.data;
  }
);

const initialState = {
  movies: {},
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
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies;
export default movieSlice.reducer;
