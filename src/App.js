import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { data } from './data';
import 'antd/dist/antd.css';
import styles from './app.module.scss';

import {
  Login,
  SignIn,
  Header,
  Preloader
} from './components/index';

import {
  Main,
  Rating,
} from './pages/index';
import Activity from './pages/Activity';
import LeftMenu from './components/LeftMenu';

function App() {
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const auth = useSelector((store) => store.auth);

  let token = sessionStorage.getItem('x-auth-token');

  const initUserAction = React.useCallback(() => {
    token && 
    Object.keys(data).map(item => {
      localStorage.setItem(item, data[item]);
    });
  }, [token]);

  React.useEffect(() => {
    if (auth.success === true) {
      history.push('/main');
    }
  }, [history, auth]);

  React.useEffect(() => {
    if (sessionStorage.getItem('x-auth-token')) initUserAction();
  }, [initUserAction]);

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
              <div className={styles.container}>
              <LeftMenu/>
              <Route exact path="/signIn">
                <SignIn />
              </Route>
              <Route exact path="/main">
                <Main />
              </Route>
              <Route exact path="/rating">
                <Rating />
              </Route>
              <Route exact path="/activity">
                <Activity/>
            </Route>
              </div>
            </Route>
          </Switch>
      )}
    </main>
  );
}

export default App;
