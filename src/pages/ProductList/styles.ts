import styled from 'styled-components';
import BackgroundImage from '../../assets/images/background1.svg';

export const Container = styled.div`
  flex: 1;
  background: url(${BackgroundImage}) no-repeat center;
  /* background-size: cover; */
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;
`;

export const Grid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 2rem 4rem;
  padding: 0 2.8rem;
`;
