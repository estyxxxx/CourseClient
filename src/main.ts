import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXiV5MCTI0JGtp2aVZCbYxin7ltyxh7uQ",
  authDomain: "courseclient-cfcff.firebaseapp.com",
  projectId: "courseclient-cfcff",
  storageBucket: "courseclient-cfcff.appspot.com",
  messagingSenderId: "389721246114",
  appId: "1:389721246114:web:bbd538a837724c9131cafb",
  measurementId: "G-GH9R2HQRKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);