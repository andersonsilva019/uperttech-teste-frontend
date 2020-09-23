import styled, { css } from 'styled-components';
import BackgroundImage from '../../assets/images/background1.svg';

export const Container = styled.div`
  ${({ theme }) => css`
    flex: 1;
    background: url(${BackgroundImage}) no-repeat center;
    /* background-size: cover; */
    height: 100%;
  `}
`;
