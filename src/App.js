import React from 'react';
import Navbar from './components/Navbar';
import { auth } from "./firebase";

// Firebase Hooks to be imported

import { useAuthState } from "react-firebase-hooks/auth";
import Chat from './components/Chat';

 const style = {

AppContainer: `max-w-[728px] mx-auto text-center`,
SectionContainer: `flex flex-col h-[auto] bg-gray-100 mt-10 shadow-xl border relative`

 }


function App() {

    const[user] = useAuthState(auth)

    // console.log(user);

  return (
    <div className={style.AppContainer}>
      <section className={style.SectionContainer}>

      {/* !Navbar */}

      <Navbar />
      {user ? <Chat /> : null}
      {/* !ChatComponent */}
      
       
      </section>
      
    </div>
  );
}

export default App;
