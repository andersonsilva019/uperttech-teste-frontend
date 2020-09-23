import React from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Title } from './styles';
import { Input, Button } from '../../../components';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Title>Quero criar uma conta</Title>
      <Form onSubmit={() => console.log('enviado')}>
        <Input name="name" placeholder="Seu nome" icon={FiUser} />
        <Input name="email" placeholder="Seu e-mail" icon={FiMail} />
        <Input name="password" placeholder="Sua senha secreta" icon={FiLock} />
        <Button>Criar conta</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
