import { Auth } from '../actions';

const initialState =  {
  authenticated: false,
  user: null,
  error: null
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case Auth.AUTH_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload.user,
        error: null
      };
    case Auth.SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        user: null,
        error: null
      };
    case Auth.AUTH_ERROR:
      return {
        ...state,
        user: null,
        error: action.payload.message
      };
    default:
      return state;
  }
}
