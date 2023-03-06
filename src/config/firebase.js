import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCh87LRCfhZExNN4ZFbOGRjXKAm9rArPRs",
  authDomain: "bookstore-tungpt.firebaseapp.com",
  databaseURL: "https://bookstore-tungpt-default-rtdb.firebaseio.com",
  projectId: "bookstore-tungpt",
  storageBucket: "bookstore-tungpt.appspot.com",
  messagingSenderId: "742316358070",
  appId: "1:742316358070:web:baa73dffced49e5144a917",
  measurementId: "G-S3EHCQDY2D"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { database , analytics} ;