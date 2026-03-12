import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// These values will be loaded from the .env.local file
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase only if the config is provided (prevents crashing before user sets it up)
let app, auth, db, googleProvider;

if (firebaseConfig.apiKey) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);

    googleProvider = new GoogleAuthProvider();
} else {
    console.warn("Firebase config is missing. Please set up your .env.local file.");
}

export { auth, db, googleProvider };
