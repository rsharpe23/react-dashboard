/* eslint-disable import/order */
import React from 'react';
import { useLocation } from 'react-router-dom';

import { useAuth, useRequest, useRedirect } from 'src/hooks';
import { useForm } from '@/Form';
import LoginForm from './Form';

import thumbnail from 'public/img/avatar.png';
import './Login.scss';

const Login = () => {
  const { login } = useAuth();
  const [formRef, getFormData] = useForm();

  const location = useLocation();
  const returnPath = (location.state && location.state.from)
    ? location.state.from.pathname : '/';

  const redirect = useRedirect(returnPath);
  const [submitDataRequest, canSubmitData] = useRequest();

  const submitData = () => {
    submitDataRequest.bind(login(getFormData()))
      .then(() => redirect({ method: 'replace' }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    canSubmitData && submitData();
  };

  return (
    <div className="Login">
      <div className="Login-Inner">
        <p>
          <img
            src={thumbnail}
            alt="Автор"
            className="Login-Thumbnail"
          />
        </p>

        <h1 className="Login-Title">Авторизация</h1>

        <LoginForm
          ref={formRef}
          onSubmit={handleFormSubmit}
        />

        <p className="mt-5 mb-3 text-muted">© 2020</p>
      </div>
    </div>
  );
};

export default Login;