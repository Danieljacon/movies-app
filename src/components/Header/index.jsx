import { DotsThreeCircle, FilmStrip, XCircle } from "phosphor-react";
import React, { useState } from "react";
import * as S from "./styles";

export default function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <S.Container>
      <S.Nav>
        <S.NavbarContainer>
          <S.NavLogo to="/" onClick={closeMobileMenu}>
            Filmes
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
      </S.Nav>
    </S.Container>
  );
}
