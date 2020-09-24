import React from 'react';

import { Container, Wrapper, Image, Description } from './styles';

interface IProductProps {
  src: string;
  description: string;
  alt: string;
}

const Product: React.FC<IProductProps> = ({ src, description, alt }) => {
  return (
    <Container>
      <Wrapper>
        <Image src={src} alt={alt} />
        <Description>{description}</Description>
      </Wrapper>
    </Container>
  );
};

export default Product;
