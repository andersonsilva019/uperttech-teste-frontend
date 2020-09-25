import styled from 'styled-components';
import { BackgroundImage } from '../../assets/images';

export const Container = styled.div`
  flex: 1;
  background: url(${BackgroundImage}) no-repeat center;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
`;
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Line = styled.div`
  width: 0.2rem;
  height: 65%;
  background: ${({ theme }) => theme.colors.primary};

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ArtImageBackground = styled.img`
  position: absolute;
  left: 0;
  top: 20rem;
  width: 90%;
  opacity: 0.4;

  @media (max-width: 1000px) {
    display: none;
  }
`;
