import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../styles/theme';

export const addButton = styled(Link)`
  font-size: 1rem;
  background-color: ${theme.success};
  color: #fff;
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
  padding: 1rem;

  &:hover {
    opacity: 0.9;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
