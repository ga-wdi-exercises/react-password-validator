import React from 'react';
import ReactDOM from 'react-dom';
import Validator from './Validator';
import './Validator.css';

ReactDOM.render(
  <Validator email={""} password={""} passwordConfirm={""}/>,
  document.getElementById('root')
);
