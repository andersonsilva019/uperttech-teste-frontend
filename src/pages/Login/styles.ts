import styled from 'styled-components';
import BackgroundImage from '../../assets/images/background1.svg';

export const Container = styled.div`
  flex: 1;
  background: url(${BackgroundImage}) no-repeat center;
  /* background-size: cover; */
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
  font-size: 1.8rem;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const Line = styled.div`
  width: 0.2rem;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
`;
