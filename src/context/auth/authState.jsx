import React, { useReducer } from 'react'
import axiosClient from '../../config/axios'
import authToken from '../../config/authToken.js'
import authContext from './authContext'
import authReducer from './authReducer'
import {
  SUCCESSFUL_REGISTRATION,
  REGISTRATION_ERROR,
  GET_USER,
  SUCCESSFUL_LOGIN,
  LOGIN_ERROR,
  LOG_OUT,
} from '../../types'

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    authenticated: null,
    user: null,
    message: null,
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  const registerUser = async (data) => {
    try {
      const res = await axiosClient.post('/api/users', data)
      console.log(res)
      dispatch({
        type: SUCCESSFUL_REGISTRATION,
        payload: res.data,
      })
      userAuthenticate()
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: 'alert-error',
      }
      dispatch({
        type: REGISTRATION_ERROR,
        payload: alert,
      })
    }
  }

  const userAuthenticate = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      authToken(token)
    }
    try {
      const res = await axiosClient.get('/api/auth')
      dispatch({
        type: GET_USER,
        payload: res.data.user,
      })
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error,
      })
    }
  }

  const logIn = async (data) => {
    try {
      const res = await axiosClient.post('api/auth', data)
      console.log(res)
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: 'alert-error',
      }
      dispatch({
        type: LOGIN_ERROR,
        payload: alert,
      })
    }
  }

  return (
    <authContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        registerUser,
        logIn,
      }}
    >
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState
