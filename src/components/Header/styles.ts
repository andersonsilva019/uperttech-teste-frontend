import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 2.5rem 4rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 22rem;
`;

export const Navigation = styled.nav`
  width: 100%;
  max-width: 50rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: ${({ theme }) => theme.colors.buttonNav};
    font-size: ${({ theme }) => theme.fontSizes.large};
    text-decoration: none;

    :nth-child(1) {
      font-weight: 500;
    }

    :nth-child(2) {
      opacity: 0.7;
    }

    & + a {
      margin-left: 3rem;
    }
  }
`;

export const NavigateToProducts = styled(Link)`
  background: ${({ theme }) => theme.colors.primary};
  padding: 1.5rem 2.8rem;
  color: ${({ theme }) => theme.colors.textButton} !important;
  font-size: ${({ theme }) => theme.fontSizes.default} !important;
  font-weight: 500;
  transition: ${({ theme }) => theme.transition.default};

  :hover {
    font-size: ${({ theme }) => theme.fontSizes.large};
    box-shadow: ${({ theme }) => theme.shadows.default};
  }
`;
