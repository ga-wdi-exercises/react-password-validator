import React from 'react';
import ReactDOM from 'react-dom';
import Validator from './App';
import './index.css';

const validator = {
  email: "test@email.com",
  password: "password",
  passconf: "password1"
}


ReactDOM.render(
  <Validator
  email={validator.email}
  password={validator.password}
  passconf={validator.passconf}
  />,
  document.getElementById('root')
);
