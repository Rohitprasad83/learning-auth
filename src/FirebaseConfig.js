import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBRC-iTooiHv6BM3tPewJbyaUqSSWZTz6o',
  authDomain: 'learning-auth-e0ed6.firebaseapp.com',
  projectId: 'learning-auth-e0ed6',
  storageBucket: 'learning-auth-e0ed6.appspot.com',
  messagingSenderId: '203111280607',
  appId: '1:203111280607:web:2da0946bf9c7782c26de6a',
  measurementId: 'G-XHJSJW92FQ',
};

const firebaseApp = initializeApp(config);
const auth = getAuth(firebaseApp);

const firebaseConfig = {
  auth,
};

export default firebaseConfig;
