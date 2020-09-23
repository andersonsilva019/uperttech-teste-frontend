import React from 'react';
import { Link } from 'react-router-dom';
import logoUperttech from '../../assets/images/logo.png';
import { Container, Logo, Navigation, NavigateToProducts } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={logoUperttech} />
      <Navigation>
        <Link to="/tdetdte">Quem somos</Link>
        <Link to="/tdetdte">Serviços</Link>
        <NavigateToProducts to="/products">Soluções</NavigateToProducts>
      </Navigation>
    </Container>
  );
};

export default Header;
