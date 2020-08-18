import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDl8n3bmck-FQ3pjuVcUyBLtqOXUKQajto",
    authDomain: "modtwoproject.firebaseapp.com",
    databaseURL: "https://modtwoproject.firebaseio.com",
    projectId: "modtwoproject",
    storageBucket: "modtwoproject.appspot.com",
    messagingSenderId: "989435912479",
    appId: "1:989435912479:web:3c78fadd5f3bc09f7d502a"
  };

let Fire = firebase.initializeApp(firebaseConfig)

export default Fire;