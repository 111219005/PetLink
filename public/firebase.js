
const firebaseConfig = {
  apiKey: "AIzaSyC_2GgHM0wJf8ErsfQ0Eej9zFq-1O5l-oM",
  authDomain: "crossplatform-final.firebaseapp.com",
  projectId: "crossplatform-final",
  storageBucket: "crossplatform-final.firebasestorage.app",
  messagingSenderId: "487789723873",
  appId: "1:487789723873:web:a19b06b10a24fa6b77b7a0"
};

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  window.auth = auth; 

