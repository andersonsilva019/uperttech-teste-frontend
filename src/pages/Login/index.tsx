import React from 'react';

import { Header } from '../../components';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { ArtImage } from '../../assets/images';
import {
  Container,
  Content,
  Wrapper,
  Line,
  ArtImageBackground,
} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Content>
          <SignIn />
          <Line />
          <SignUp />
        </Content>
        <ArtImageBackground src={ArtImage} alt="background" />
      </Wrapper>
    </Container>
  );
};

export default Login;
