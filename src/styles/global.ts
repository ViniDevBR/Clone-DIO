import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  *, *::after, *::before {
    font-family: 'Open Sans';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  
  body {
    overflow-x: hidden;
    background-color: #1E192C;
    color: #FFFFFF;
  }
`