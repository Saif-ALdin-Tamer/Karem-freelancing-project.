// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsPtytMuv2gw_p8p0dSVumTsl7tO2tqBs",
  authDomain: "karem-portfolio.firebaseapp.com",
  databaseURL: "https://karem-portfolio-default-rtdb.firebaseio.com",
  projectId: "karem-portfolio",
  storageBucket: "karem-portfolio.firebasestorage.app",
  messagingSenderId: "314910674789",
  appId: "1:314910674789:web:6237479f5ab0d2153a5b8c",
  measurementId: "G-GKEKKX1CV1"
};

// Initialize Firebase using the Compat SDK
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();
window.kaDatabase = db; // Make it globally accessible as window.kaDatabase
