import React from 'react';
import ReactDOM from 'react-dom';
import Validator from './App';
import './index.css';

const validator ={
  email: "rodney.curl@nike.com",
  password: "password"
  passconf: "password3000"
}

ReactDOM.render(
  <Validator
  email={validator.email}
  password={validator.password}
  passconf={validator.passconf}
  />,

  document.getElementById('root')
);
