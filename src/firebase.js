import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB1kUVdgyKipomHMq008zXbjzsWR4cM2oE",
    authDomain: "discord-clone-b40ec.firebaseapp.com",
    databaseURL: "https://discord-clone-b40ec.firebaseio.com",
    projectId: "discord-clone-b40ec",
    storageBucket: "discord-clone-b40ec.appspot.com",
    messagingSenderId: "879806809761",
    appId: "1:879806809761:web:8a8957a646845e824692e0",
    measurementId: "G-7B93BD4LTK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;