import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEvn("VITE_FIREBASE_API"),
  // authDomain: "yt-mern-blog.firebaseapp.com",
  // projectId: "yt-mern-blog",
  // storageBucket: "yt-mern-blog.firebasestorage.app",
  // messagingSenderId: "150248092393",
  // appId: "1:150248092393:web:34bc9843d732ee4be7f678"
  authDomain: "blog-a4c44.firebaseapp.com",
  projectId: "blog-a4c44",
  storageBucket: "blog-a4c44.firebasestorage.app",
  messagingSenderId: "339680769345",
  appId: "1:339680769345:web:8e85425145a3baa7215dc0",
  measurementId: "G-0LE7V6VPN8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
