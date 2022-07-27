import styled from "styled-components";
const centerItems = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: ${(props) => props.theme.sizes[16]};
  font-size: ${(props) => props.theme.typography.fontSizes["2xl"]};
  padding: 0 ${(props) => props.theme.sizes[10]};
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 998;
  border-top: ${(props) => props.theme.borders["1px"]};
  border-color: ${(props) => props.theme.colors.tertiary};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    max-height: 55px;
  }
`;

export const Copyright = styled.h1`
  ${centerItems};
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
  justify-self: flex-end;
  cursor: pointer;
  text-decoration: none;
  font-size: ${(props) => props.theme.typography.fontSizes["lg"]};
  font-weight: ${(props) => props.theme.typography.fontWeights.bold};
  letter-spacing: ${(props) => props.theme.typography.letterSpacings.widest};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    justify-self: center;
    font-size: ${(props) => props.theme.typography.fontSizes["sm"]};
  }

`
