import React from 'react';

import {
  Container,
  Wrapper,
  Product,
  SkeletronImage,
  SkeletronDescription,
} from './styles';

const ShimmerProduct: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Product>
          <SkeletronImage />
          <SkeletronDescription />
          <SkeletronDescription />
        </Product>
        <Product>
          <SkeletronImage />
          <SkeletronDescription />
        </Product>
        <Product>
          <SkeletronImage />
          <SkeletronDescription />
          <SkeletronDescription />
        </Product>
      </Wrapper>
    </Container>
  );
};

export default ShimmerProduct;
