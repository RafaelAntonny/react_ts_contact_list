import styled from 'styled-components';
import theme from '../../styles/theme';

const getTagColor = (label: string, tagColor?: string) => {
  if (tagColor) return tagColor;

  const lowerLabel = label.toLowerCase();
  if (lowerLabel === 'amigos') return theme.friend;
  if (lowerLabel === 'familia') return theme.success;

  return theme.work;
};

export const Card = styled.div<{ $isEditing: boolean }>`
  background-color: ${theme.brighterBG};
  padding: 1rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  transition: all 0.2s ease-in-out;
  box-shadow: ${({ $isEditing }) =>
    $isEditing
      ? '0px 4px 4px rgba(108, 99, 255, 0.1)'
      : '0px 4px 4px rgba(0, 0, 0, 0.1)'};
  border: ${({ $isEditing }) =>
    $isEditing ? `1px solid ${theme.active}` : '1px solid transparent'};
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

export const Input = styled.input<{ $isEditing: boolean }>`
  background: transparent;
  display: block;
  border-radius: 8px;
  min-width: 30ch;
  font-size: 1rem;
  margin: 0.5rem 0;
  padding: 0.25rem 0.5rem;
  color: inherit;
  outline: none;
  transition: all 0.2s ease-in-out;
  border: ${({ $isEditing }) =>
    $isEditing ? `1px solid #aaa` : '1px solid transparent'};
`;

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
`;
