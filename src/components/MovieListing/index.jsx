import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard";
import * as S from "./styles";

export default function MovieListing() {
  const movies = useSelector(getAllMovies);

  let renderMovies =
    movies.movies.Response === "True"
      ? movies.movies.Search.map((movie) => {
          return (
            <MovieCard
              key={movie.imdbID}
              data={{
                Title: movie.Title,
                Year: movie.Year,
                imdbID: movie.imdbID,
                Type: movie.Type,
                Poster: movie.Poster,
              }}
            />
          );
        })
      : "No movies found";

  return (
    <S.Wrapper>
      <h1>Lista de filmes:</h1>
      <S.Container>{renderMovies}</S.Container>
    </S.Wrapper>
  );
}
