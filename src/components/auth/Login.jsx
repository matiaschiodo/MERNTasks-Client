import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import alertContext from '../../context/alerts/alertContext'
import authContext from '../../context/auth/authContext'

const Login = () => {
  const alertsContext = useContext(alertContext)
  const { alert, showAlert } = alertsContext

  const authsContext = useContext(authContext)
  const { registerUser, message, authenticated, logIn } = authsContext

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const { email, password } = user

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (email.trim() === '' || password.trim() === '') {
      showAlert('All fields are required', 'alert-error')
    }

    logIn({ email, password })
  }

  return (
    <div className='form-user'>
      {alert ? <div className={`alert ${alert.category}`}>{alert.msg}</div> : null}
      <div className='container-form shadow-dark'>
        <h1>Log In</h1>
        <form onSubmit={onSubmit}>
          <div className='input-form'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='email'
              value={email}
              onChange={onChange}
            />
          </div>
          <div className='input-form'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={onChange}
            />
          </div>
          <div className='input-form'>
            <input type='submit' className='btn btn-primary btn-block' value='Login' />
          </div>
        </form>

        <Link to={'/new-account'} className='link-account'>
          Create new account
        </Link>
      </div>
    </div>
  )
}

export default Login
