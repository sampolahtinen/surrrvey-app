import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: "GothamRounded";
  src: url("../static/fonts/gothamrounded-medium.otf") format("otf");
  font-display: fallback;
  @import url('https://fonts.googleapis.com/css?family=VT323&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Varela&display=swap');
  }
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  font-family: "GothamRounded", "Calibre", sans-serif;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  height: 100%;
  width: 100%;
  font-size: 1.6rem;
  color: ${colors.darkGrey};
  background-attachment: fixed;
  background-color: white;
  font-family: 'Roboto', sans-serif;
  background-image: linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%);
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

input {
  border: 0;
}

@media screen and (max-width: 420px) {
  html {
    font-size: 56.25%; /* 55% of 16px is 9px*/
  }
}

@media screen and (max-width: 768px) {
  html {
    font-size: 56.25%; /* 55% of 16px is 9px*/
  }
}
`;
