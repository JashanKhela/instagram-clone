import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCyDFH3Yi_bKpTwRTc7AXqMmmBWhuGtWKk',
  authDomain: 'instagram-b3dd4.firebaseapp.com',
  projectId: 'instagram-b3dd4',
  storageBucket: 'instagram-b3dd4.appspot.com',
  messagingSenderId: '467154664582',
  appId: '1:467154664582:web:96bcdc93e0be86e565e507',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);
export { firebase, FieldValue };
