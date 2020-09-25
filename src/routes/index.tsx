import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/_Main';
import Login from '../pages/Login';
import ProductList from '../pages/ProductList';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/products" exact component={ProductList} />

      {/* NotFound */}
      <Route path="/" component={NotFound} />
    </Switch>
  );
};

export default Routes;
