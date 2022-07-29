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
  width: 100vw;
  min-height: ${(props) => props.theme.sizes[10]};
  margin: 0 auto;
  font-size: ${(props) => props.theme.typography.fontSizes["2xl"]};
  padding: 0 ${(props) => props.theme.sizes[10]};
  position: fixed;
  bottom: 0;
  background: ${(props) => props.theme.colors.opacityToTop};


  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 10px;
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
