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
