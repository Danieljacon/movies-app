import React, { useEffect } from "react";
import MovieListing from "../MovieListing";
import { Container } from "./styles";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies())
  }, [dispatch]);

  return (
    <Container>
      <MovieListing />
    </Container>
  );
}
