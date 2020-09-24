import styled from 'styled-components';
import { Link } from 'react-router-dom';
import artImage from '../../../assets/images/art1.svg';

export const Container = styled.div`
  flex: 1;
  background: url(${artImage}) no-repeat center 17rem;
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
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;
  width: 80rem;
`;

export const ButtonNavigateToSignUp = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  height: 6rem;
  padding: 1.5rem 2.8rem;
  margin-top: 4rem;

  background: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.textButton};
  box-shadow: ${({ theme }) => theme.shadows.default};
  font-weight: 500;
  transition: ${({ theme }) => theme.transition.default};

  :hover {
    transform: scale(1.02);
  }
`;
