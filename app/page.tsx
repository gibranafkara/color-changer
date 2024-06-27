'use client';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyADanmpptEcUNUcZTbm7f4NDi_iVQX4h9g',
  authDomain: 'personal-6f995.firebaseapp.com',
  projectId: 'personal-6f995',
  storageBucket: 'personal-6f995.appspot.com',
  messagingSenderId: '175367935496',
  appId: '1:175367935496:web:e57a6b967b68e90735a3bd',
  measurementId: 'G-5D124F012C',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// import
import { useEffect, useState } from 'react';
import {
  doc,
  getFirestore,
  setDoc,
  getDoc,
  onSnapshot,
} from 'firebase/firestore';

export default function Home() {
  const [color, setColor] = useState('20fee6');

  // update data

  // read data

  useEffect(() => {
    // update data realtime
    onSnapshot(doc(db, 'color', 'ID'), (doc) => {
      if (doc.exists()) {
        const fetchedData = doc.data();
        setColor(fetchedData.color);
      } else {
        console.log('No such document');
      }
    });
  }, []);

  const redColor = Math.floor(Math.random() * 255).toString(16);
  const greenColor = Math.floor(Math.random() * 255).toString(16);
  const blueColor = Math.floor(Math.random() * 255).toString(16);

  const result = `${redColor}${greenColor}${blueColor}`;

  function handleClick() {
    // setColor(result);

    setDoc(doc(db, 'color', 'ID'), {
      color: result,
    });
  }

  return (
    <main>
      {color && (
        <div
          onClick={() => {
            handleClick();
          }}
          className={`w-screen h-screen`}
          style={{
            backgroundColor: `#${color}`,
          }}
        ></div>
      )}
    </main>
  );
}
