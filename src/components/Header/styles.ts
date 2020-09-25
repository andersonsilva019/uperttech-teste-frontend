import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { appearFromLeftLine } from '../../styles/keyframes';

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

const animateLine = css`
  :hover {
    ::after {
      position: absolute;
      content: '';
      animation: ${appearFromLeftLine} 0.3s;
      width: 100%;
      left: 0;
      bottom: -10px;
      background: ${({ theme }) => theme.colors.primary};
      height: 2px;
    }
  }
`;

export const Navigation = styled.nav`
  width: 100%;
  max-width: 50rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: ${({ theme }) => theme.colors.buttonNav};
    font-size: ${({ theme }) => theme.fontSizes.default};
    text-decoration: none;
    position: relative;

    :nth-child(1) {
      font-weight: 500;
      ${animateLine}
    }

    :nth-child(2) {
      opacity: 0.7;
      ${animateLine}
    }

    & + a {
      margin-left: 3rem;
    }

    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

export const NavigateToProducts = styled(Link)`
  background: ${({ theme }) => theme.colors.primary};
  padding: 1.5rem 2.8rem;
  color: ${({ theme }) => theme.colors.textButton} !important;
  font-size: ${({ theme }) => theme.fontSizes.small} !important;
  font-weight: 500;
  transition: ${({ theme }) => theme.transition.default};

  :hover {
    /* font-size: ${({ theme }) => theme.fontSizes.large}; */
    box-shadow: ${({ theme }) => theme.shadows.default};
  }
`;

export const ButtonMenu = styled.button`
  display: none;
  background: none;
  border: 0;
  cursor: pointer;
  z-index: 5;

  @media (max-width: 1000px) {
    display: unset;
  }
`;
