import React from 'react';
import { ArtImage } from '../../../assets/images';
import {
  Container,
  Wrapper,
  Title,
  ButtonNavigateToSignUp,
  ArtImageBackground,
} from './styles';

const MainContent: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Soluções inteligentes para modernizar sua empresa</Title>
        <ButtonNavigateToSignUp to="/login">
          Solicitar orçamento
        </ButtonNavigateToSignUp>
        <ArtImageBackground src={ArtImage} alt="background" />
      </Wrapper>
    </Container>
  );
};

export default MainContent;
