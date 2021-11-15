import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseFirestore = initializeApp({
  apiKey: "AIzaSyDVwtFuGSdwMxRHBbsH1oxmzkAEL6UWfw0",
  authDomain: "fir-test-298f4.firebaseapp.com",
  projectId: "fir-test-298f4",
});
const firestoreDB = getFirestore(firebaseFirestore);

export default firestoreDB;
