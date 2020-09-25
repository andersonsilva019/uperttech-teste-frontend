import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logoUperttech from '../../assets/images/logo.png';
import HeaderMobile from './HeaderMobile';
import {
  Container,
  Logo,
  Navigation,
  NavigateToProducts,
  ButtonMenu,
} from './styles';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibleHeader = useCallback(() => {
    setIsVisible(prevState => !prevState);
  }, []);

  const handleSelectOptionHeader = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <>
      {isVisible && <HeaderMobile />}
      <Container>
        <Logo src={logoUperttech} />
        <Navigation>
          <Link to="/" onClick={handleSelectOptionHeader}>
            Quem somos
          </Link>
          <Link to="/tdetdte" onClick={handleSelectOptionHeader}>
            Serviços
          </Link>
          <NavigateToProducts to="/products" onClick={handleSelectOptionHeader}>
            Soluções
          </NavigateToProducts>
          <ButtonMenu onClick={handleToggleVisibleHeader}>
            {isVisible ? (
              <FiX size={30} color="#FFF" />
            ) : (
              <FiMenu size={30} color="#4C71FB" />
            )}
          </ButtonMenu>
        </Navigation>
      </Container>
    </>
  );
};

export default Header;
