import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Wrapper } from './styles';

const HeaderMobile: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">Quem somos</Link>
        <Link to="/serviços">Serviços</Link>
        <Link to="/products">Soluções</Link>
      </Wrapper>
    </Container>
  );
};

export default HeaderMobile;
