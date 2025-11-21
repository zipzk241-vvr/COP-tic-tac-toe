import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    color: #333;
  }

  .app {
    min-height: 100vh;
    /* ЦЕНТРУВАННЯ ПО ВЕРТИКАЛІ ТА ГОРИЗОНТАЛІ */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
`;
