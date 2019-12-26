import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';

const App: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact>
        <div>home</div>
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </>
);

export default App;
