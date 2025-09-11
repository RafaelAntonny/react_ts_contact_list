import styled from 'styled-components';
import theme from '../../styles/theme';

const getTagColor = (label: string, tagColor?: string) => {
  if (tagColor) return tagColor;

  const lowerLabel = label.toLowerCase();
  if (lowerLabel === 'amigo') return theme.friend;
  if (lowerLabel === 'familia') return theme.success;

  return theme.work;
};

export const Card = styled.div`
  background-color: ${theme.brighterBG};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 16px;
  margin-bottom: 2rem;
`;

export const Name = styled.h3`
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
`;

export const Tag = styled.span<{ label: string; color?: string }>`
  padding: 0.25rem 0.5rem;
  color: #fff;
  font-weight: bold;
  font-size: 0.625rem;
  background-color: ${({ label, color }) => getTagColor(label, color)};
  border-radius: 10px;
  margin-right: 1rem;
  display: inline-block;
`;

export const Info = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0.5rem 0;
`;

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
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
