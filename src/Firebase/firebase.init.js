// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeYGZ0ZCQ5fIbZI8XTpO3-nugZODRU3Kw",
  authDomain: "oy-topia.firebaseapp.com",
  projectId: "oy-topia",
  storageBucket: "oy-topia.firebasestorage.app",
  messagingSenderId: "881642674643",
  appId: "1:881642674643:web:b13f9f3efe356c3b453726"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;