import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.css';

import {
  Login,
  SignIn,
  Header,
  Preloader
} from './components/index';

function App() {
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const auth = useSelector((store) => store.auth);

  return (
    <main id="main">
      {auth.isLoading ? (
        <Preloader
          text={
            auth.isLoading
              ? auth.isLoading
              : user.isLoading
              ? user.isLoading
              : 'Почта подтверждена. Пожалуйста, совершите вход'
          }
        />
      ) : (
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route>
              <Header path="/:path" />
              <Route exact path="/signIn">
                <SignIn />
              </Route>
            </Route>
          </Switch>
      )}
    </main>
  );
}

export default App;
