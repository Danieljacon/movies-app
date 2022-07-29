import styled, { keyframes } from "styled-components";

const centerItems = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
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
export const SearchBar = styled.input`
  ${centerItems};
  width: 100%;
  max-width: ${(props) => props.theme.sizes["xs"]};
  height: ${(props) => props.theme.sizes[8]};
  border: none;
  border-radius: ${(props) => props.theme.radii.xl};
  padding: ${(props) => props.theme.sizes[2]};
  color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.white};
  z-index: 998;
  background: ${(props) => props.theme.colors.opacityToTop};
  text-shadow: none;
  position: relative;
  animation: ${fadeIn} 0.5s ease;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.white};
    text-shadow: none;
    font-weight: ${(props) => props.theme.typography.fontWeights.bold};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-top: 100px;
  }
`;
