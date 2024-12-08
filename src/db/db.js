import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl8T9KNkUtfyWzaL60qwu51ElphltK46Q",
  authDomain: "techsore-e7b34.firebaseapp.com",
  projectId: "techsore-e7b34",
  storageBucket: "techsore-e7b34.firebasestorage.app",
  messagingSenderId: "1024675667579",
  appId: "1:1024675667579:web:cfde3ebe5ca131de900cde"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db