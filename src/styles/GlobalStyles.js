import { createGlobalStyle } from 'styled-components';

import caramella from './fonts/caramella.ttf';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  overflow-x: hidden;

}

html {
  font-size: 62.5%;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.4rem;
  background: #7F260F;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

html,
body,
#root {
  height: 100%;
}

html {
  scroll-behavior: smooth;
  @media (prefers-reduced-motion: reduce) {
	  scroll-behavior:auto;
  }
}

@font-face {
    font-family: 'caramella';
    src: url(${caramella}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
