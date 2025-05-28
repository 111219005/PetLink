// src/api/firebaseConfig.js
import { getApps, getApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC_2GgHM0wJf8ErsfQ0Eej9zFq-1O5l-oM',
  authDomain: 'crossplatform-final.firebaseapp.com',
  projectId: 'crossplatform-final',
  storageBucket: 'crossplatform-final.appspot.com',
  messagingSenderId: '487789723873',
  appId: '1:487789723873:web:a19b06b10a24fa6b77b7a0',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

window.firebase = firebase;
// 初始化 app（只能一次）
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// 初始化功能
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
