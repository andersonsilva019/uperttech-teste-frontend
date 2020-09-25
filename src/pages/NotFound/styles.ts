import styled from 'styled-components';
import { BackgroundImage } from '../../assets/images';

export const Container = styled.div`
  flex: 1;
  background: url(${BackgroundImage}) no-repeat center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    height: 100%;
  }
`;
