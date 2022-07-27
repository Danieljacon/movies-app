import React, { useEffect } from "react";
import movieApi from "../../apis/movieApi";
import MovieListing from "../MovieListing";
import { API_KEY } from "../../apis/MovieApiKey";
import { Container } from "./styles";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

export default function Home() {
  const movieTitle = "harry potter";
  const atualPage = 2;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${API_KEY}&s=${movieTitle}&type=movie&page=${atualPage}`)
        .catch((error) => {
          console.log(error);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, [dispatch]);

  return (
    <Container>
      <MovieListing />
    </Container>
  );
}
