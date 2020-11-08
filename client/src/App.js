import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { data } from './data';
import 'antd/dist/antd.css';
import styles from './app.module.scss';

import {
  Login,
  SignIn,
  Header,
  Preloader,
  Dialogs,
  Chat,
  Widget
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
  // const initUserAction = React.useCallback(() => {
  //   token && 
  //   Object.keys(data).map(item => {
  //     localStorage.setItem(item, JSON.stringify(data[item]));
  //   });
  // }, [token]);

  React.useEffect(() => {
    if (token && history.pathname === '/signIn') {
      history.push('/main/5fa69d80ffdd8589ae52c498');
    }
  }, [history, auth]);

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
              <Login isLoggedIn={token} />
            </Route>
            <Route>
              <Header path="/:path" />
              <Route exact path="/signIn">
                <SignIn isLoggedIn={token} />
              </Route>
              {token && (
                <>
                  <div className={styles.container}>
                    <LeftMenu/>
                    <Route exact path="/main/:id">
                      <Main />
                    </Route>
                    <Route exact path="/rating">
                      <Rating />
                    </Route>
                    <Route exact path="/activity">
                      <Activity/>
                    </Route>
                    <Route exact path="/dialogs">
                      <Dialogs title="Диалоги" />
                    </Route>
                    <Route path="/chat/:id">
                      <Chat />
                    </Route>
                  </div>
                  <Widget />
                </>
              )}
            </Route>
          </Switch>
      )}
    </main>
  );
}

export default App;
