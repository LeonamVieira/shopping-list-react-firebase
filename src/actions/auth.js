
import { browserHistory } from 'react-router';
import firebase from 'firebase';


export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';

export function signInUser(credentials) {
  return function(dispatch) {
    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        browserHistory.replace('/');
        dispatch(authUser());
      })
      .catch(error => {
        dispatch(authError(error));
      });
  }
}

export function signOutUser() {
  firebase.auth().signOut();
  browserHistory.push('/login');

  return {
    type: SIGN_OUT_USER
  }
}

export function verifyAuth() {
  return function (dispatch) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authUser(user));
      } else {
        dispatch(signOutUser());
      }
    });
  }
}

export function authUser(user) {
  return {
    type: AUTH_USER,
    payload: { user }
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
