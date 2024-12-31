import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBK6mmKouZe8Tyzo1Vp5LLNXe6Tvmuavd4",
  authDomain: "food-recipe-app-65f8f.firebaseapp.com",
  projectId: "food-recipe-app-65f8f",
  storageBucket: "food-recipe-app-65f8f.appspot.com",
  messagingSenderId: "1059997889539",
  appId: "1:1059997889539:web:22da06279507320baeca36",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };