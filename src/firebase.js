
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    // eslint-disable-next-line no-undef
    apiKey: process.env.REACT_FIREBASE_AUTH_DOMAIN,
    // eslint-disable-next-line no-undef
    authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
    // eslint-disable-next-line no-undef
    projectId: process.env.REACT_FIREBASE_PROJECT_ID,
    // eslint-disable-next-line no-undef
    storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
    // eslint-disable-next-line no-undef
    messagingSenderId: process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
    // eslint-disable-next-line no-undef
    appId: process.env.REACT_FIREBASE_APP_ID,
    // eslint-disable-next-line no-undef
    measurementId: process.env.REACT_FIREBASE_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);