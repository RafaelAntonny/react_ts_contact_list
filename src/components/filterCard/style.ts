import styled from 'styled-components';

import { Props } from '.';
import theme from '../../styles/theme';

type CoreProps = Omit<Props, 'counter' | 'caption'>;

export const Card = styled.button<CoreProps>`
  padding: 0.5rem;
  border: 1px solid ${(props) => (props.active ? theme.active : theme.border)};
  color: ${theme.secondaryText};
  background-color: ${(props) =>
    props.active ? theme.brighterBG : theme.cardBG};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  box-shadow: ${(props) =>
    props.active ? '0 0 0 2px rgba(108, 99, 255, 0.1)' : 'none'};

  &:hover {
    border-color: ${theme.active};
  }
`;

export const Counter = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  display: block;
`;

export const Label = styled.span`
  font-size: 0.875rem;
`;
