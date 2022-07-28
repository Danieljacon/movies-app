import { createGlobalStyle } from 'styled-components';

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
    }
`
export default GlobalStyles;
