import React from 'react'
import ReactDOM from 'react-dom'
import Cred from './App.js'

const cred = {
  email: "email@email.com",
  password: "passcode",
  confirmation: "passcode"
}

ReactDOM.render(
  <Cred
    email={cred.email}
    password={cred.password}
    confirmation={cred.confirmation}
    />,
  document.getElementById('root')
)
