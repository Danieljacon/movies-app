import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";

import { Container } from "./styles";

export default function MovieListing() {
  const movies = useSelector(getAllMovies);

  let renderMovies = movies.movies.Response === "True" ? (
    movies.movies.Search.map((movie) => {
      return <div key={movie.imdbID}>{movie.Title}</div>;
    })
  ) : "No movies found";
  return <Container>{renderMovies}</Container>;
}
