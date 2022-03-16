import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background: #f5f5f7;
        scroll-behavior: smooth;
        font-size: 20px;
        line-height: 1.5;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
    }

    ul {
        margin: 0;
        padding: 0;
    }
`;
