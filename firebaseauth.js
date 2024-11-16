
  // Import the functions you need from the SDKs you need
 /* import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
  import {getFirestore, setDoc , doc} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCWHDLy_DVEzyXh8lqjrn7ngpi10NQU0VY",
    authDomain: "sspu-attendancecalculator.firebaseapp.com",
    databaseURL: "https://sspu-attendancecalculator-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sspu-attendancecalculator",
    storageBucket: "sspu-attendancecalculator.firebasestorage.app",
    messagingSenderId: "1094841381531",
    appId: "1:1094841381531:web:8cc892a2bd55a790684c3e",
    measurementId: "G-GPS90SPVV9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function submitform(){
   const email=document.getElementById('email').value;
   const prn=document.getElementById('prn').value;
   const name=document.getElementById('name').value;
   const department=document.getElementById('department').value;
   const password=document.getElementById('password').value;
    
   const auth= getAuth();
   const db=getFirestore();

   createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential)=>{
    const user=userCredential.user;
    const userData={
        email:email,
        name:name,


    };
   })



  }
