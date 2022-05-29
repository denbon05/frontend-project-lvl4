import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './Home.jsx';
import Login from './Login.jsx';

export default function App() {
  return (
    <>
      <h1 className="d-flex flex-column">
        <Link to="/login">Login</Link>
      </h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}
