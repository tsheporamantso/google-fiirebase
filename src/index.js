import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC085s4No8OQrBznImJZjEUNQm4r5IvnxI",
  authDomain: "fir-9-tutorial-a2da1.firebaseapp.com",
  projectId: "fir-9-tutorial-a2da1",
  storageBucket: "fir-9-tutorial-a2da1.appspot.com",
  messagingSenderId: "366852303598",
  appId: "1:366852303598:web:b839b4724af7b8482861ff",
};

/*
! Init firebase app
*/
initializeApp(firebaseConfig);

/*
! Init service
*/
const db = getFirestore();

/*
! collection ref
*/
const colRef = collection(db, "books");

/*
! get collection data
*/
getDocs(colRef).then((snapshot) => {
  let books = [];

  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id });
  });
  console.log(books);
});

// .catch(err => {
//   console.log(err.message)
// })
