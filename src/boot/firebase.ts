import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDIgJo-VknPNDsSYGdD5X98MUu5QTAbXBY',
  authDomain: 'web-final-project-13cdc.firebaseapp.com',
  projectId: 'web-final-project-13cdc',
  storageBucket: 'web-final-project-13cdc.appspot.com',
  messagingSenderId: '430735133295',
  appId: '1:430735133295:web:769e94bf6a9dbc2d545b9a',
  measurementId: 'G-RMGZVE88BH',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default boot(({ app }) => {
  app.config.globalProperties.$db = db;
});

export { db };
