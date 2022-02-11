import React, { useState } from "react";
import { Link } from 'react-router-dom'

const NewAccount = () => {
  const [ user, setUser ] = useState({
    email: '',
    name: '',
    password: '',
    confirm: '',
  })

  const { email, name, password, confirm } = user

  const onChange = e => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className="form-user">
      <div className="container-form shadow-dark">
        <h1>Sign Up</h1>
        <form
            onSubmit={onSubmit}
          >
          <div className="input-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="input-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="input-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="input-form">
            <label htmlFor="confirm">Confirm password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="confirm password"
              value={confirm}
              onChange={onChange}
            />
          </div>
          <div className="input-form">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Sign Up"
            />
          </div>
        </form>

        <Link to={'/'} className="link-account">
          Already have an account
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
