import styled from 'styled-components';

export const Aside = styled.aside`
  padding: 1rem;
  background-color: #eee;
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
  background-color: #f9f9f9;
  border-radius: 8px;
  font-weight: bold;
  border: 1px solid #aba6c1;
  width: 100%;
  outline: none;

  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: #6c63ff;
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.1);
  }
`;
