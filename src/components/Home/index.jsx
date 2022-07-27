import React, { useEffect } from "react";
import movieApi from "../../apis/movieApi";
import MovieListing from "../MovieListing";
import { API_KEY } from "../../apis/MovieApiKey";
import { Container } from "./styles";

export default function Home() {
  useEffect(() => {
    const movieTitle = "harry potter";
    const atualPage = 2;
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${API_KEY}&s=${movieTitle}&type=movie&page=${atualPage}`)
        .catch((error) => {
          console.log(error);
        });
      console.log(response);
    };
    fetchMovies();
  }, []);

  return (
    <Container>
      <MovieListing />
    </Container>
  );
}
