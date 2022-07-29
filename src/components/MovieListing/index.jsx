import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard";
import * as S from "./styles";

export default function MovieListing() {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  let renderMovies =
    movies.Response === "True"
      ? movies.Search.map((movie) => {
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

  let renderSeries =
    series.Response === "True"
      ? series.Search.map((serie) => {
          return (
            <MovieCard
              key={serie.imdbID}
              data={{
                Title: serie.Title,
                Year: serie.Year,
                imdbID: serie.imdbID,
                Type: serie.Type,
                Poster: serie.Poster,
              }}
            />
          );
        })
      : "No series found";

  return (
    <S.Wrapper>
      <h1>Filmes</h1>
      <S.Container>{renderMovies}</S.Container>
      <h1>Séries</h1>
      <S.Container>{renderSeries}</S.Container>
    </S.Wrapper>
  );
}
