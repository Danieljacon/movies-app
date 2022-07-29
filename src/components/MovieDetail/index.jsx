import React, { useEffect } from "react";
import * as S from "./styles";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrSerieDetail,
  getMovieOrSerieDetail,
} from "../../features/movies/movieSlice";
import { Calendar, FilmStrip, StarHalf, ThumbsUp } from "phosphor-react";

export default function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getMovieOrSerieDetail);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrSerieDetail(imdbID));
  }, [dispatch, imdbID]);

  return (
    <S.Container>
      <S.Box>
        <S.Title>{data.Title}</S.Title>
        <S.Image src={data.Poster} alt="" />
      </S.Box>

      <S.Wrapper>
        <S.Description>
          <p>{data.Plot}</p>
        </S.Description>

        <S.Data>
          <S.DataBox>
            <S.StrongData>
              <span>
                <StarHalf size={20} weight="fill" /> IMDB Rating
              </span>
              {data.imdbRating}
            </S.StrongData>
            <S.StrongData>
              <span>
                <ThumbsUp size={20} weight="fill" /> IMDB Votes
              </span>
              {data.imdbVotes}
            </S.StrongData>

            <S.StrongData>
              <span>
                <FilmStrip size={20} weight="fill" /> Runtime
              </span>
              {data.Runtime}
            </S.StrongData>

            <S.StrongData>
              <span>
                <Calendar size={20} weight="fill" /> Released
              </span>
              {data.Released}
            </S.StrongData>
          </S.DataBox>

          <S.DataBox>
            <S.StrongInfos>
              <span>Director</span>
              {data.Director}
            </S.StrongInfos>
            <S.StrongInfos>
              <span>Genres</span>
              {data.Genre}
            </S.StrongInfos>
            <S.StrongInfos>
              <span>Awards</span>
              {data.Awards}
            </S.StrongInfos>
            <S.StrongInfos>
              <span>Actors</span>
              {data.Actors}
            </S.StrongInfos>
          </S.DataBox>
        </S.Data>
      </S.Wrapper>
    </S.Container>
  );
}
