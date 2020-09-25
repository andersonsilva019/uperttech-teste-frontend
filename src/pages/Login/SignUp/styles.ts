import styled from 'styled-components';

export const Container = styled.fieldset`
  padding: 2rem;
  margin-top: 4rem;
  border: 0;
  z-index: 2;
`;

export const Title = styled.legend`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;
