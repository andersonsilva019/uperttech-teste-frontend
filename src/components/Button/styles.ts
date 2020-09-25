import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 5.2rem;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 0.8rem;
  padding: 0 1.6rem;
  border: 0;
  color: ${({ theme }) => theme.colors.textButton};
  font-weight: 500;
  margin-top: 1.6rem;
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    background: ${shade(0.08, '#4C71FB')};
  }
`;
