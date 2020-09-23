import React from 'react';

import { Container, Wrapper, Title, ButtonNavigateToSignUp } from './styles';

const MainContent: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Soluções inteligentes para modernizar sua empresa</Title>
        <ButtonNavigateToSignUp to="/login">
          Solicite seu orçamento
        </ButtonNavigateToSignUp>
      </Wrapper>
    </Container>
  );
};

export default MainContent;
