import { css } from "@emotion/react";

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    font-family: "Nunito", sans-serif;
    font-size: 12px;
    background: #efefef;

    font-style: normal;
    height: 100%;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }

    @media screen and (min-width: 1200px) {
      font-size: 16px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  #root {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
  }
`;
