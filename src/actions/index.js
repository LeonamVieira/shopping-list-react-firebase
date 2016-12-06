import firebase from 'firebase';

import * as Auth from './auth';

import Config from '../config/config';
firebase.initializeApp(Config.firebaseConfig());

export {
  Auth,
};
