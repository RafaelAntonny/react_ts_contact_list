import styled from 'styled-components';

import { Props } from '.';

export const Card = styled.div<Props>`
  padding: 0.5rem;
  border: 1px solid ${(props) => (props.active ? '#6c63ff' : '#aba6c1')};
  color: #43387b;
  background-color: ${(props) => (props.active ? '#fff' : '#f8f8f8')};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  box-shadow: ${(props) =>
    props.active ? '0 0 0 2px rgba(108, 99, 255, 0.1)' : 'none'};

  &:hover {
    border-color: #6c63ff;
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
