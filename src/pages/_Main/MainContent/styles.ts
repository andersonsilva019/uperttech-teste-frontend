import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { appearFromLeft, appearFromTop } from '../../../styles/keyframes';
import artImage from '../../../assets/images/art1.svg';

export const Container = styled.div`
  /* flex: 1; */
  /* background: url(${artImage}) no-repeat 10rem 19rem; */
  height: 100%;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: min(4vw, ${({ theme }) => theme.fontSizes.large});
  text-align: center;
  animation: ${appearFromLeft} 1s;
  width: 80rem;

  @media (max-width: 1000px) {
    width: 80%;
  }
`;

export const ButtonNavigateToSignUp = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  animation: ${appearFromTop} 1s;

  height: 6rem;
  padding: 1.5rem 2.8rem;
  margin-top: 4rem;

  background: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.default};

  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textButton};

  transition: ${({ theme }) => theme.transition.default};

  :hover {
    transform: scale(1.02);
  }
`;

export const ArtImageBackground = styled.img`
  position: absolute;
  top: 13rem;
  z-index: -1;
  width: 90%;
`;
