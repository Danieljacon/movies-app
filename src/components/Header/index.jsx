import { DotsThreeCircle, FilmStrip, XCircle } from "phosphor-react";
import React, { useState } from "react";
import * as S from "./styles";
import SearchBar from "../SearchBar";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncSeries } from "../../features/movies/movieSlice";

export default function Header() {
  const [click, setClick] = useState(false);
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const windowSize = window.innerWidth;
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncSeries(term));
    setClick(false);
  };
  const changeTerm = (e) => {
    setTerm(e.target.value);
  };

  return (
    <S.Container>
      <S.Nav>
        <S.NavbarContainer>
          <S.NavLogo to="/" onClick={closeMobileMenu}>
            Attraction
            <FilmStrip size={32} color="white" />
          </S.NavLogo>
          <S.MobileIcon onClick={handleClick}>
            {click ? (
              <XCircle size={32} color="white" />
            ) : (
              <DotsThreeCircle size={32} color="white" />
            )}
          </S.MobileIcon>

          <S.NavMenu onClick={handleClick} click={click}>
            <S.NavItem>
              <S.NavLinks to="/" onClick={closeMobileMenu}>
                Linkedin
              </S.NavLinks>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinks to="/" onClick={closeMobileMenu}>
                Home
              </S.NavLinks>
            </S.NavItem>
          </S.NavMenu>
        </S.NavbarContainer>
        {click && windowSize < 1024 && (
          <SearchBar
            onChange={changeTerm}
            onSubmit={handleSubmit}
            value={term}
          />
        )}
        {windowSize > 1024 && (
          <SearchBar
            onChange={changeTerm}
            onSubmit={handleSubmit}
            value={term}
          />
        )}
      </S.Nav>
    </S.Container>
  );
}
