import React from 'react';

import { NotFoundImage } from '../../assets/images';
import { Container } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <img src={NotFoundImage} alt="NotFound" />
    </Container>
  );
};

export default NotFound;
