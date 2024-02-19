'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
    
  }

  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    overflow-x: hidden;

      &.no-overflow {
        overflow: hidden;
        padding-right: 17px;
      }
  }

  ol,
    ul,
    dl {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    p {
      margin: 0;
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: unset;
    }

    b {
      font-weight: 600;
    }

    strong {
      font-weight: 700;
    }
`
