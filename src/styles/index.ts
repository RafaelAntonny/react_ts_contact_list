import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito Sans", sans-serif;
    list-style: none;
  }

  body {
    background-color: #f9f9f9;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`;

export default GlobalStyle;
