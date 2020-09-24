import styled from 'styled-components';
import BackgroundImage from '../../assets/images/background1.svg';

export const Container = styled.div`
  flex: 1;
  background: url(${BackgroundImage}) no-repeat center;
  /* background-size: cover; */
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fontSizes.tiny};
  text-align: center;
`;

export const Grid = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 4rem;
`;
