import styled from 'styled-components';
import theme from '../../styles/theme';

export const Aside = styled.aside`
  padding: 1rem;
  background-color: ${theme.darkerBG};
  height: 100vh;
`;

export const Filters = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  margin-top: 1rem;
`;

export const SearchBar = styled.input`
  padding: 0.5rem;
  background-color: ${theme.background};
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
