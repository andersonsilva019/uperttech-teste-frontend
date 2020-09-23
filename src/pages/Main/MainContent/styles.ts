import styled from 'styled-components';
import { Link } from 'react-router-dom';
import artImage from '../../../assets/images/art1.svg';

export const Container = styled.div`
  flex: 1;
  background: url(${artImage}) no-repeat top;
  background-size: cover;
`;

export const Wrapper = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  text-align: center;
  width: 90rem;
`;

export const ButtonNavigateToSignUp = styled(Link)`
  text-decoration: none;
  height: 5rem;
  padding: 1.5rem 2.8rem;
  background: ${({ theme }) => theme.colors.primary};
  margin-top: 4rem;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.textButton};
  box-shadow: ${({ theme }) => theme.shadows.default};
  font-weight: 500;
  transition: ${({ theme }) => theme.transition.default};

  :hover {
    transform: scale(1.02);
  }
`;
