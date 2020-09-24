import styled from 'styled-components';

export const Image = styled.img`
  width: 25rem;
`;

export const Container = styled.a`
  background: #fff;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.default};
  :hover {
    transform: scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.flat};
    /* ${Image} {
      transform: scale(1.02);
    } */
  }
`;

export const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const Description = styled.div`
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
