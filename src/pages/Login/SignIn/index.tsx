import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Title } from './styles';
import { Input, Button } from '../../../components';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Title>Já sou cliente</Title>
      <Form onSubmit={() => console.log('enviado')}>
        <Input name="email" placeholder="Seu e-mail" icon={FiMail} />
        <Input name="password" placeholder="Sua senha secreta" icon={FiLock} />
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
