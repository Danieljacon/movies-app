import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${(props) => props.theme.sizes["6"]} 0;
  gap: ${(props) => props.theme.sizes[5]};
`;

export const Title = styled.h3`
  font-size: ${(props) => props.theme.typography.fontSizes["lg"]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  background: ${(props) => props.theme.colors.background};
  opacity: 1;
  transition: all 0.3s ease-in-out;
  position: absolute;
  height: 100%;
  width: 0;
  text-align: center;
  padding: ${(props) => props.theme.sizes[2]};
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  border-radius: ${(props) => props.theme.radii.xl};
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  &:hover {
    ${Title} {
      font-size: ${(props) => props.theme.typography.fontSizes["lg"]};
      color: ${(props) => props.theme.colors.primary};
      opacity: 0.9;
      width: 100%;
    }
  }

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 70px 25px rgba(0, 0, 0, 0.4) inset;
  }
`;

export const Image = styled.img`
  width: ${(props) => props.theme.sizes[48]};
  height: ${(props) => props.theme.sizes[64]};
  padding-left: ${(props) => props.theme.sizes[4]};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: ${(props) => props.theme.sizes[36]};
    height: ${(props) => props.theme.sizes[48]};
  }
`;
