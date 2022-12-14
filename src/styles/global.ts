import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #fff;
    --text-body: #000000;
    --trace: #D8D3D3
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    @media (max-width: 768px) {
        overflow-x: hidden;
  }
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
        font-size: 87.5%; //14px
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}
body, input, textarea, button {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
    font-size: 2rem;
}
p {
    //padding-bottom: 1rem;
    text-align: left;
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 0.9px;
    line-height: 1.2;
}

p::selection {
    background: #000000;
    color: #fff;
}
a {
    text-decoration: none;
    text-decoration-color : inherit;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

`