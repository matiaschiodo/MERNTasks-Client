import {
  SUCCESSFUL_REGISTRATION,
  REGISTRATION_ERROR,
  SUCCESSFUL_LOGIN,
  LOGIN_ERROR,
  LOG_OUT,
  GET_USER,
} from '../../types'

export default function reducer(state, action) {
  switch (action.type) {
    case SUCCESSFUL_REGISTRATION:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        authenticated: true,
        message: null,
      }
    case LOGIN_ERROR:
    case REGISTRATION_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        message: action.payload,
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}
