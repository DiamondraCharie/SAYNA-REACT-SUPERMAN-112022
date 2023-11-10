// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXchV7o1M3Y4ojb0MyfJvHGN38hZxTg-A",
  authDomain: "batman-react-app-api-dcb2f.firebaseapp.com",
  projectId: "batman-react-app-api-dcb2f",
  storageBucket: "batman-react-app-api-dcb2f.appspot.com",
  messagingSenderId: "1074090604622",
  appId: "1:1074090604622:web:3ba8610fd32c692f736b1f",
  measurementId: "G-NL6WK1P22H"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = app.auth();
export default app;