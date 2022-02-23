import React, { useState } from "react"
import { Link } from "react-router-dom"

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
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
  }

  return (
    <div className='form-user'>
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
            <input
              type='submit'
              className='btn btn-primary btn-block'
              value='Login'
            />
          </div>
        </form>

        <Link to={"/new-account"} className='link-account'>
          Create new account
        </Link>
      </div>
    </div>
  )
}

export default Login
