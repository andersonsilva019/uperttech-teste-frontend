import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/_Main';
import Login from '../pages/Login';
import ProductList from '../pages/ProductList';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/products" component={ProductList} />
    </Switch>
  );
};

export default Routes;
