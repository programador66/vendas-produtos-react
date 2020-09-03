import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import List from "./List";
import Cart from "./Cart";
import DetalhesProduto from "./DetalhesProduto";

export default () => (
  <Switch>
    <Route path="/list" component={List} />
    <Route path="/cart" component={Cart} />
    <Route path="/detalhes-produto/:id" component={DetalhesProduto} />
    <Redirect path="/" to="/list" />
  </Switch>
);
