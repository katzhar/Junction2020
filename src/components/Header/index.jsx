import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Button } from '../index';
import { fetchLogOut } from '../../store/actions';

import './Header.scss';

export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handlerLogOut = React.useCallback((e) => {
    e.preventDefault();
    dispatch(fetchLogOut());
    history.push('/');
  }, [dispatch, history]);

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">Hack</Link>
        </div>
        <div className="header__right-block">
          <div className="header__actions">
            {sessionStorage.getItem('x-auth-token') ? (
              <Button
                href=""
                text="Log Out"
                type="button"
                onClick={handlerLogOut}
                subClass="header-action"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
