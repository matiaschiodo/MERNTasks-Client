import React, { useReducer } from 'react'
import axiosClient from '../../config/axios'
import authContext from './authContext'
import authReducer from './authReducer'
import {
  SUCCESSFUL_REGISTRATION,
  REGISTRATION_ERROR,
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

  return (
    <authContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        registerUser,
      }}
    >
      {props.children}
    </authContext.Provider>
  )
}

export default AuthState
