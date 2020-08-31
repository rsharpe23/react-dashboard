import React, { forwardRef } from 'react';

import Form from '@/Form';
import Input from '@/Input';
import Button from '@/Button';

import './Form.scss';

const LoginForm = (props, ref) => {
  return (
    <Form {...props} ref={ref}>
      <p>
        <Input
          required
          name="email"
          type="email"
          placeholder="E-mail адрес"
        />

        <Input
          required
          name="password"
          type="password"
          placeholder="Пароль"
        />
      </p>

      <p>
        <label>
          <input type="checkbox" /> Запомнить меня
        </label>
      </p>

      <p><Button size="lg">Войти</Button></p>
    </Form>
  );
};

export default forwardRef(LoginForm);