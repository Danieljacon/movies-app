import React, { useEffect, useState } from "react";
import * as S from "./styles";

export default function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      //mobile
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <S.Container>
      <S.Nav>
        <S.NavbarContainer>
          <S.NavLogo to="/" onClick={closeMobileMenu}>
            C
          </S.NavLogo>
          <S.MobileIcon onClick={handleClick}>
            {click ? <div>teste1</div> : <div>teste2</div>}
          </S.MobileIcon>
          <S.NavMenu onClick={handleClick} click={click}>
            <S.NavItem>
              <S.NavLinks to="/" onClick={closeMobileMenu}>
                Home
              </S.NavLinks>
            </S.NavItem>

            <S.NavItem>
              <S.NavLinks to="/products" onClick={closeMobileMenu}>
                Products
              </S.NavLinks>
            </S.NavItem>
            <S.NavItem>
              <S.NavLinks to="/movies" onClick={closeMobileMenu}>
                Movies
              </S.NavLinks>
            </S.NavItem>

            <S.NavItem>
              <S.NavLinks to="/mapa" onClick={closeMobileMenu}>
                Mapa
              </S.NavLinks>
            </S.NavItem>

            <S.NavItemBtn>
              {button ? (
                <S.NavBtnLink to="/sign-up">
                  <S.Button primary>SIGN UP</S.Button>
                </S.NavBtnLink>
              ) : (
                <S.NavBtnLink to="/sign-up">
                  <S.Button onClick={closeMobileMenu} fontBig primary>
                    SIGN UP
                  </S.Button>
                </S.NavBtnLink>
              )}
            </S.NavItemBtn>
          </S.NavMenu>
        </S.NavbarContainer>
      </S.Nav>
    </S.Container>
  );
}
