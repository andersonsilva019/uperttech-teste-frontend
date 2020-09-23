import React from 'react';
import { Container } from './styles';
import Header from './Header';
import MainContent from './MainContent';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <MainContent />
    </Container>
  );
};

export default Main;
