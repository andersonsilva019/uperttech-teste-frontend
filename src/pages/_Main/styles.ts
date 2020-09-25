import styled from 'styled-components';
import BackgroundImage from '../../assets/images/background1.svg';

export const Container = styled.div`
  background: url(${BackgroundImage}) no-repeat center;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
`;
