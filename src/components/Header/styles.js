import styled from "styled-components";
import { Link } from "react-router-dom";

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
  border-bottom: ${(props) => props.theme.borders["1px"]};
  border-color: ${(props) => props.theme.colors.tertiary};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    max-height: 55px;
  }
`;
export const Container = styled.div`
  z-index: 1;
  width: 100%;
`;
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: ${(props) => props.theme.sizes[16]};
  padding: 0 ${(props) => props.theme.sizes[10]};
  max-width: ${(props) => props.theme.sizes.container["xl"]};

  ${Container}
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
    transform: translate(-100%, 30%);
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  ${centerItems};
  list-style: none;
  text-align: center;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: column;
    width: 100%;
    height: 92.7vh;
    position: absolute;
    top: ${(props) => props.theme.sizes[12]};
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
export const Button = styled.button`
  border-radius: 4px;
  background: #2c2c34;
  white-space: nowrap;
  padding: 12px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.tertiary};
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 100%;
  }
`;
