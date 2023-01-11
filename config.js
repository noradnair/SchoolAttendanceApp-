 import  firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBO269AHdocCp_G4ssdjqS2prmdxHX4C0",
  authDomain: "school-attendance-app-840ec.firebaseapp.com",
  databaseURL: "https://school-attendance-app-840ec-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-840ec",
  storageBucket: "school-attendance-app-840ec.appspot.com",
  messagingSenderId: "1001419497485",
  appId: "1:1001419497485:web:17bab4a7003f39314f7544"
};
firebase.initializeApp(firebaseConfig)
// Initialize Firebase
  export default firebase.database()
 

  