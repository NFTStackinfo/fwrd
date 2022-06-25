import { createGlobalStyle, keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Brown Trial';
    src: url('../fonts/BrownTrial-LightTrial.eot') format('embedded-opentype'),
    url('../fonts/BrownTrial-LightTrial.woff2') format('woff2'),
    url('../fonts/BrownTrial-LightTrial.woff') format('woff'),
    url('../fonts/BrownTrial-LightTrial.ttf') format('truetype'); /* Safari, Android, iOS */
    font-weight: 300;
  }

  /*reset*/
  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, summary,
  time, mark, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }

  article, aside, details, figcaption, figure, dialog,
  footer, header, hgroup, menu, nav, section, main {
    display: block;
  }

  ul, ul li {
    list-style: none;
  }

  blockquote, q {
    quotes: none;

    &:before, &:after {
      content: none;
    }
  }

  a {
    text-decoration: none;
    font-size: 100%;
    color: inherit;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /**
   * Paul Irish box sizing reset so all elements have broder-box.
   */
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  /**
   * custom smarty resets
   */
  a {
    text-decoration: none;
  }

  button, input, a, textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #fff inset !important;
    }
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  /*global*/
  body {
    font-family: ${({ theme }) => theme.font.primary};
    font-size: ${({ theme }) => theme.font.size.subheading1};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 300;
    line-height: 1.4;
    letter-spacing: 0.03em;
    background-image: ${({ theme }) => theme.gradients.background};
    background-repeat: no-repeat;
    background-size: cover;
  }

  .container, .container-sm {
    margin: 0 auto;
    width: 100%;
  }

  .container {
    max-width: 1120px;

    &-sm {
      max-width: 548px;
    }
  }

  .wrapper {
    padding-inline: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding-inline: 16px;
    }
  }

  /*typography*/

  .h1, .h2, .h3, .h4, .h5, h1, h2, h3, h3, h4, h5, .subheading1, .subheading2 {
    letter-spacing: 0.03em;
  }

  h1, h2, h3, h4, h5,
  .h1, .h2, .h3, .h4, .h5 {
    line-height: 1.2;
    font-family: ${({ theme }) => theme.font.primary};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 300;
  }

  h1, .h1 {
    font-size: ${({ theme }) => theme.font.size.h1.base};

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: ${({ theme }) => theme.font.size.h1.lg};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.font.size.h1.sm};
    }
  }

  h2, .h2 {
    font-size: ${({ theme }) => theme.font.size.h2};
  }

  h3 .h3 {
    font-size: ${({ theme }) => theme.font.size.h3};
  }

  h4, .h4 {
    font-size: ${({ theme }) => theme.font.size.h4};
  }

  h5, .h5 {
    font-size: ${({ theme }) => theme.font.size.h5};
  }

  .subheading1, .subheading2 {
    font-family: ${({ theme }) => theme.font.secondary};
    font-weight: 700;
  }

  .subheading1 {
    font-size: ${({ theme }) => theme.font.size.subheading1};
  }

  .subheading2 {
    font-size: ${({ theme }) => theme.font.size.subheading2};
  }


  /*colors*/
  .color-primary {
    color: ${({ theme }) => theme.colors.lightBlue};
  }


  /*animations*/
  .animated {
    opacity: 0;
  }

  .fade-in {
    animation: ${fadeIn} .5s ease-in forwards;
  }


  iframe {
    pointer-events: none; /*for development*/
  }

  .list-dash {
    margin-left: 20px;

    li {
      list-style-type: '- ';
      margin-bottom: 12px;

      p {
        padding-bottom: 0 !important;
      }
    }
  }

  .pb-20 {
    padding-bottom: 20px;
  }

  .dotted-line {
    background: radial-gradient(#000000, #000000 4px, transparent 4px, transparent);
  }

  .btn {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-inline: 16px;
    gap: 10px;
    height: 48px;
    color: ${({ theme }) => theme.colors.white};
    transition: 0.3s;
    cursor: pointer;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.size.subheading2};
    font-weight: 700;
    border: 2px solid #ffffff;
    border-radius: 40px;
    background-color: transparent;

    .icon {
      path {
        transition: 0.3s;
      }
    }

    &.fade-in-button {
      opacity: 1;
      visibility: visible;
    }

    &.btn_secondary {
      &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.orange};

        .icon path {
          fill: ${({ theme }) => theme.colors.orange} !important;
        }
      }
    }

    &_primary {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0;
      position: relative;

      &:hover {
        .btn_primary__btn {
          transform: translate(56px, 0);
        }

        .btn_primary__icon_wrapper {
          &:first-child {
            transform: scale(1);
            opacity: 1;
          }

          &:last-child {
            transform: translateX(56px) scale(0);
          }
        }
      }

      &__btn {
        border: 2px solid #ffffff;
      }

      &__icon_wrapper {
        background-color: ${({ theme }) => theme.colors.orange};
        border-radius: 50%;
        height: 48px;
        width: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
        transform-origin: 0 50%;
        cursor: pointer;

        &:first-child {
          transform: scale(0);
          opacity: 0;
          position: absolute;
          left: 0;
          top: 0;
        }

        &:last-child {
          transform: translateX(8px) scale(1);
        }

        path {
          transition: 0.3s;
        }
      }
    }
  }


`
