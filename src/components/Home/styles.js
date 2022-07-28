import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: ${(props) => props.theme.sizes[6]};
  max-width: ${(props) => props.theme.sizes["6xl"]};
  margin: 0 auto;
`;

