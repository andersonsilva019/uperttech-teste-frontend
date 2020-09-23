import React from 'react';

import { Container, Content, Wrapper, Line } from './styles';
import { Header } from '../../components';
import SignIn from './SignIn';
import SignUp from './SignUp';

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
      </Wrapper>
    </Container>
  );
};

export default Login;
