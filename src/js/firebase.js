import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5kdepoSU9MOCWlar4NyF4KPC8dnYnYNU",
  authDomain: "webapp-project-f9f1e.firebaseapp.com",
  projectId: "webapp-project-f9f1e",
  storageBucket: "webapp-project-f9f1e.appspot.com",
  messagingSenderId: "1018493784499",
  appId: "1:1018493784499:web:625e9b5f69ea8af4303bc6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
