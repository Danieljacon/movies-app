import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";

export default function MovieCard(props) {
  const movie = props.data;
  const LANCAMENTO = "Lançamento";
  return (
    <S.Box key={movie.imdbID}>
      <S.Image src={movie.Poster} alt={movie.Title} />
      <S.Title>
        <Link to={`/movie/${movie.imdbID}`}>
          <h3>{movie.Title}</h3>
          <p>{`${LANCAMENTO} ${movie.Year}`}</p>
        </Link>
      </S.Title>
    </S.Box>
  );
}
