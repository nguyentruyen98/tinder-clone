import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBQA63hahZU0ANczGY8DSiN0-3NepoHR9I",
    authDomain: "tinder-clone-796a7.firebaseapp.com",
    databaseURL: "https://tinder-clone-796a7.firebaseio.com",
    projectId: "tinder-clone-796a7",
    storageBucket: "tinder-clone-796a7.appspot.com",
    messagingSenderId: "414570835320",
    appId: "1:414570835320:web:7e0f15019f18bcf80dac8d",
    measurementId: "G-131ZR5QB2F"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();
  export default database;
