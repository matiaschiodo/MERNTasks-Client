import {
  SUCCESSFUL_REGISTRATION,
  REGISTRATION_ERROR,
  SUCCESSFUL_LOGIN,
  LOGIN_ERROR,
  LOG_OUT,
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
    case REGISTRATION_ERROR:
      return {
        ...state,
        token: null,
        message: action.payload,
      }
    default:
      return state
  }
}
