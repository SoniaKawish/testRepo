// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJV98__tkKuTiP1pH33QEGt1Taqk-qMUw",
  authDomain: "knowreginaapp-47482.firebaseapp.com",
  databaseURL: "https://knowreginaapp-47482-default-rtdb.firebaseio.com",
  projectId: "knowreginaapp-47482",
  storageBucket: "knowreginaapp-47482.appspot.com",
  messagingSenderId: "203672116127",
  appId: "1:203672116127:web:7ca9fe6cb3d8fd97423baa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// import { getDatabase, ref, onValue} from "firebase/database";


// // Get a reference to the database service 
// const db = getDatabase();  


 
// const reference = ref(db, 'places/City'); 
//   onValue(reference, (snapshot) => {
//     const data = snapshot.val();
//     console.log("referenced data: " + data);
//   });
