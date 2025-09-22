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
