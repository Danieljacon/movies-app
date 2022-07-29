import {
  DotsThreeCircle,
  FilmStrip,
  GithubLogo,
  House,
  LinkedinLogo,
  XCircle,
} from "phosphor-react";
import React, { useState } from "react";
import * as S from "./styles";
import SearchBar from "../SearchBar";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";

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
              <S.LinkOtherPage
                href="https://www.linkedin.com/in/daniel-jacon/"
                target="_blank"
                onClick={closeMobileMenu}
              >
                <LinkedinLogo size={32} weight="fill" />
                <span>Linkedin</span>
              </S.LinkOtherPage>
            </S.NavItem>
            <S.NavItem>
              <S.LinkOtherPage
                href="https://www.github.com/danielJacon/"
                target="_blank"
                onClick={closeMobileMenu}
              >
                <GithubLogo size={32} weight="fill" />
                <span>Github</span>
              </S.LinkOtherPage>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinks to="/" onClick={closeMobileMenu}>
                <House size={32} weight="fill" />
                <span>Home</span>
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
