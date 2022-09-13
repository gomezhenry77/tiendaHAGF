  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBLnYuzBN2jZi21lPEMgM2jHSPNRTygfLs",
    authDomain: "tiendasurahagf.firebaseapp.com",
    projectId: "tiendasurahagf",
    storageBucket: "tiendasurahagf.appspot.com",
    messagingSenderId: "1043986323452",
    appId: "1:1043986323452:web:53b4b2cba1cbc6eb904479",
    measurementId: "G-Q94NNH8TY5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
