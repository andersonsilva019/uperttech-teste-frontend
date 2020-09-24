import React from 'react';

import { Container, Wrapper, Title, Grid } from './styles';
import { notebookImage } from '../../assets/products';
import Product from './Product';
import { Header } from '../../components';

const ProductList: React.FC = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Title>Nossos serviços</Title>
        <Grid>
          <Product
            src={notebookImage}
            alt="Macbook"
            description="
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to"
          />
          <Product
            src={notebookImage}
            alt="Macbook"
            description="
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to"
          />
          <Product
            src={notebookImage}
            alt="Macbook"
            description="
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to"
          />
          <Product
            src={notebookImage}
            alt="Macbook"
            description="
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to"
          />
          <Product
            src={notebookImage}
            alt="Macbook"
            description="
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to"
          />
          <Product
            src={notebookImage}
            alt="Macbook"
            description="
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to"
          />
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default ProductList;
