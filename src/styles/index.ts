import styled, { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito Sans", sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: #f9f9f9;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`;

export const MainContainer = styled.main`
  padding: 0 2.5rem;
  height: 100vh;
  overflow-y: scroll;
`;

export const Title = styled.h2`
  font-family: 'Quicksand';
  display: block;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const TextField = styled.input`
  padding: 0.5rem;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  border: 1px solid ${theme.border};
  width: 100%;
  outline: none;

  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: ${theme.active};
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.1);
  }
`;

export const Button = styled.button<{
  $variant?: 'default' | 'success' | 'failure';
}>`
  font-weight: bold;
  font-size: 0.75rem;
  color: #fff;
  padding: 0.5rem 0.75rem;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 0.5rem;

  background-color: ${({ $variant = 'default' }) =>
    $variant === 'default' ? theme.buttonDefault : theme[$variant]};

  &:hover {
    opacity: 0.9;
  }
`;

export default GlobalStyle;
