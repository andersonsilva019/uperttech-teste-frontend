import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 4;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.primary};
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;

  a {
    color: ${({ theme }) => theme.colors.textButton};
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    padding: 2rem;
    font-weight: 500;
  }
`;
