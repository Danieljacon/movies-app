import styled, { keyframes } from "styled-components";

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const fadeInBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInTop = keyframes`
  from {
    opacity: 0;
    top: -100%;
  }
  to {
    opacity: 1;
    top: 0;
  }
`

export const Container = styled.div`
  display: flex;
  padding: ${(props) => props.theme.sizes[4]} ${(props) => props.theme.sizes[10]};
  max-width: ${(props) => props.theme.sizes["6xl"]};
  margin: 0 auto;
  gap: ${(props) => props.theme.sizes[4]};

  @media (max-width: ${(props) => props.theme.breakpoints["lg"]}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.theme.sizes["2xs"]};
  border-radius: ${(props) => props.theme.radii.xl};
  overflow: hidden;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  /* position: relative; */
  animation: ${fadeInLeft} 0.6s ease;
  @media (max-width: ${(props) => props.theme.sizes["md"]}) {
    max-width: 100%;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  gap: ${(props) => props.theme.sizes[4]};

  @media (max-width: ${(props) => props.theme.sizes["md"]}) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.sizes[5]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: ${(props) => props.theme.colors.background};
  opacity: 1;
  transition: all 0.2s ease-in-out;
  text-align: center;
  padding: ${(props) => props.theme.sizes[2]};
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

export const Description = styled.span`
  max-width: ${(props) => props.theme.sizes["4xl"]};
  font-size: ${(props) => props.theme.sizes[4]};
  padding: ${(props) => props.theme.sizes[6]};
  position: relative;
  opacity: 0;
  animation: ${fadeInBottom} 0.6s ease forwards;
  animation-delay: .8s;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: ${(props) => props.theme.radii.xl};
`;

export const Image = styled.img`
  width: 100%;
`;
export const Data = styled.div`
  display: flex;
  max-width: ${(props) => props.theme.sizes["4xl"]};
  gap: ${(props) => props.theme.sizes[4]};

  @media (max-width: ${(props) => props.theme.sizes["md"]}) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const DataBox = styled.div`
  min-width: ${(props) => props.theme.sizes["2xs"]};
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.sizes[2]};
  padding: ${(props) => props.theme.sizes[6]};

  @media (max-width: ${(props) => props.theme.sizes["md"]}) {
    min-width: 100%;
  }
`;

export const StrongData = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 0;
  position: relative;
  animation: ${fadeInTop} 0.6s ease forwards;
  animation-delay: 0.4s;

  span {
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.sizes[1]};
  }

  @media (max-width: ${(props) => props.theme.sizes["md"]}) {
    max-width: 100%;
  }
`;

export const StrongInfos = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: right;
  opacity: 0;
  position: relative;
  animation: ${fadeInTop} 0.6s ease forwards;
  animation-delay: .6s;
  span {
    min-width: ${(props) => props.theme.sizes["24"]};
    text-align: left;
  }
  @media (max-width: ${(props) => props.theme.sizes["md"]}) {
    max-width: 100%;
    flex-direction: column;
    text-align: left;
  }
`;
