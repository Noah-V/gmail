import React from 'react';
import Header from './Components/Header';
import { Routes, Route, Link } from "react-router-dom";
import Mail from './Components/Mail';
import EmailList from './Components/EmailList';
import Sidebar from './Components/Sidebar';
import SendMail from './Components/SendMail';
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice.js"
import './App.css';
import { login, selectUser } from './features/userSlice';
import Login from './Components/Login';
import { useDispatch } from 'react-redux';
import { auth } from './Components/Firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  React.useEffect(()=> {
    onAuthStateChanged(auth, user => {
      if(user){//if user is logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }
    })
  }, [])

  return (
    !user ? (<Login/> ) : (
    <div className="app">
      <Header/>
      <div className="app-body">
        <Sidebar/>
        <Routes>
          <Route path="/mail" element={<Mail/>}/>
          <Route path="/" element={<EmailList/>}/>
        </Routes>
      </div>
      { sendMessageIsOpen && <SendMail/> }
    </div>
    )
  );
}

export default App;
