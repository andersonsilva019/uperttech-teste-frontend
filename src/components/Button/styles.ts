import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 5.2rem;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;
  padding: 0 16px;
  border: 0;
  color: ${({ theme }) => theme.colors.textButton};
  font-weight: 500;
  margin-top: 16px;
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    background: ${shade(0.0, '#4C71FB')};
  }
`;
