import styled from 'styled-components';
import Skeletron from '../../../../resources/Skeletron';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: none;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;

  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 4rem;
`;

export const Product = styled.div`
  background: transparent;
  max-height: 40rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.8rem;
`;

export const SkeletronImage = styled(Skeletron)`
  width: 25rem;
  height: 25rem;
`;

export const SkeletronDescription = styled(Skeletron)`
  margin-top: 2rem;
  width: 25rem;
  height: 2rem;
`;
