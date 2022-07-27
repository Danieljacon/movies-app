import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: ${(props) => props.theme.typography.fonts.body};
        font-weight: ${(props) => props.theme.typography.fontWeights.semibold};
        color: ${(props) => props.theme.colors.primary};
        letter-spacing: ${(props) => props.theme.typography.lineHeights.wide};
    }
    .App {
        height: 100vh;
        background: ${(props) => props.theme.colors.background};
    }
`
export default GlobalStyles;
