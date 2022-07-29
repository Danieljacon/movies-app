import React, { useEffect } from "react";
import MovieListing from "../MovieListing";
import { Container } from "./styles";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncSeries } from "../../features/movies/movieSlice";

export default function Home() {
  return (
    <Container>
      <MovieListing />
    </Container>
  );
}
