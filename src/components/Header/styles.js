import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// width 0 from 100
const fadeIn = keyframes`
  from {
    opacity: 0;
    bottom: -100%;
  }
  to {
    opacity: 1;
    bottom: 0;
  }
`;

const centerItems = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Nav = styled.nav`
  ${centerItems};
  height: ${(props) => props.theme.sizes[16]};
  font-size: ${(props) => props.theme.typography.fontSizes["2xl"]};
  position: sticky;
  top: 0;
  z-index: 999;
  background: ${(props) => props.theme.colors.opacityToBottom};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    max-height: 55px;
  }
`;
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  position: fixed;
  top: 0;

`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: ${(props) => props.theme.sizes[16]};
  padding-left: ${(props) => props.theme.sizes[12]};
  padding-right: ${(props) => props.theme.sizes[10]};
  max-width: ${(props) => props.theme.sizes["6xl"]};
  animation: ${fadeIn} .5s ease-in-out;

  ${Container};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 0 ${(props) => props.theme.sizes[10]};
    position: fixed;
    width: 100%;
    top: 0;
    height: ${(props) => props.theme.sizes[16]};
  }
`;

export const NavLogo = styled(Link)`
  ${centerItems};
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: ${(props) => props.theme.typography.fontSizes["3xl"]};
  font-weight: ${(props) => props.theme.typography.fontWeights.bold};
  letter-spacing: ${(props) => props.theme.typography.letterSpacings.widest};
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 40%);
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 9999;
  }
`;

export const NavMenu = styled.ul`
  ${centerItems};
  list-style: none;
  text-align: center;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    position: absolute;
    top: 0;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${(props) => props.theme.colors.background};
  }
`;

export const NavItem = styled.li`
  height: ${(props) => props.theme.sizes[16]};
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;
export const NavLinks = styled(Link)`
  ${centerItems};
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    font-weight: ${(props) => props.theme.typography.fontWeights.bold};
    &:hover {
      color: ${(props) => props.theme.colors.secondary};
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  ${centerItems};
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
export const NavItemBtn = styled.li`
  @media screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    ${centerItems};
    width: 100%;
    height: 120px;
  }
`;
