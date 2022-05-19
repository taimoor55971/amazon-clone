import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyBoR2ch4I_u1QLmeTjIlyzYUe7dk6GYZSI",
  authDomain: "clone-59964.firebaseapp.com",
  databaseURL: "https://clone-59964.firebaseio.com",
  projectId: "clone-59964",
  storageBucket: "clone-59964.appspot.com",
  messagingSenderId: "1093257831000",
  appId: "1:1093257831000:web:3013a152e48e324cc5e02d"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };