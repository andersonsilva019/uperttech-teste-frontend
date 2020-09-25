import React, { useEffect, useState } from 'react';

import { Container, Wrapper, Title, Grid } from './styles';
import { NotebookImage } from '../../assets/products';
import Product from './Product';
import { Header } from '../../components';
import ShimmerProduct from './Product/Shimmer';

const ProductList: React.FC = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <Container>
      <Header />
      <Wrapper>
        <Title>Nossos serviços</Title>
        {isLoading ? (
          <ShimmerProduct />
        ) : (
          <Grid>
            <Product
              src={NotebookImage}
              alt="Macbook"
              description="
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to"
            />
            <Product
              src={NotebookImage}
              alt="Macbook"
              description="
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to"
            />
            <Product
              src={NotebookImage}
              alt="Macbook"
              description="
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to"
            />
          </Grid>
        )}
      </Wrapper>
    </Container>
  );
};

export default ProductList;
