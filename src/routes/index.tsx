import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      {/* <Route path="/products" exact component={Main} /> */}
      {/* <Route path="/signin" exact component={Main} /> */}
      {/* <Route path="/sign" exact component={Main}/> */}
    </Switch>
  );
};

export default Routes;
