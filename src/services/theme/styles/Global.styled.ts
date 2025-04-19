import {createGlobalStyle, css} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${css`
    *,
    *::after,
    *::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      height: 100%;
    }

    body {
      font-family: sans-serif;
      font-weight: 400;
      font-style: normal;
      font-size: 16px;
      line-height: 24px;
      height: 100%;
      overflow-y: auto;
      background-color: ${({theme}) => theme.colors.surface};
      color: ${({theme}) => theme.colors.onSurface.hightEmphasis};
    }

    #root {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    a {
      all: inherit;
      padding: 0;
      cursor: pointer;
      transition: color ease 0.25s;

      &:hover {
        text-decoration: underline;
        text-underline-offset: ${({theme}) => theme.spacing.sm};
      }

      &:focus {
        outline: 2px solid #2e86de;
        outline-offset: ${({theme}) => theme.spacing.xxs};
      }
    }

    button {
      all: inherit;
      border: none;
      outline: none;
      padding: 0;
      transition: color ease 0.25s;

      &:hover {
        cursor: pointer;
      }

      &:focus {
        outline: 2px solid #2e86de;
        outline-offset: ${({theme}) => theme.spacing.xxs};
      }
    }

    svg {
      transition: fill ease 0.25s;
    }
  `}
`;
