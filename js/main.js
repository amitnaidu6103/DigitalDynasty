
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyACLaHtGl3sMUchiSFoG-jUealH1nr5Fio",
    authDomain: "digitaldynasty-aefa8.firebaseapp.com",
    projectId: "digitaldynasty-aefa8",
    storageBucket: "digitaldynasty-aefa8.appspot.com",
    messagingSenderId: "123433058080",
    appId: "1:123433058080:web:2188d36eeb70d430862145",
    measurementId: "G-QV9361C6PC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);