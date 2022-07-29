import { createGlobalStyle, keyframes } from "styled-components";
const gradient = keyframes`
    0% {
    background-position: 0% 50%;
    }
    50% {
    background-position: 100% 50%;
    }
    100% {
    background-position: 0% 50%;
    }
`;

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: ${(props) => props.theme.typography.fonts.body};
        font-weight: ${(props) => props.theme.typography.fontWeights.normal};
        color: ${(props) => props.theme.colors.primary};
        letter-spacing: ${(props) => props.theme.typography.lineHeights.wide};
        text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
    }
    .App {
        background: ${(props) => props.theme.colors.background};
	background-size: 400% 400%;
	animation: ${gradient} 20s ease infinite;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .Wrapper {
        padding: 80px 0;
    }
`;
export default GlobalStyles;
