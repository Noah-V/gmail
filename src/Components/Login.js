import React from 'react'
import './css/Login.css';
import { Button } from '@mui/material';
import { auth } from './Firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider } from './Firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice.js'

function Login() {

  const dispatch = useDispatch();

  const signInWithGoogle = ()=> {
    signInWithPopup(auth, provider)
    .then(result => {
      //Getting the google access token api
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // the user signed in info
      const user = result.user;
    }).catch(error => {
      //handling errors
      const errorCode = error.code;
      const errorMessage = error.message;
      //The email of the user's account used.
      const email = error.customData.email;
      //The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    }); 
  }

  const signInNormally = ()=> {
    signInWithPopup(auth, provider)
    .then(user => {
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        })
      )
    }).catch(error => alert(error.message));
  }
  return (
    <div className='login'>
        <div className="login-container">
            <img src={require('../images/newgmaillogo.jpg')} alt="" />
            <Button variant="contained" color="primary" onClick={signInNormally}>Login</Button>
            {/* <Button variant="contained" color="primary" onClick={signInWithGoogle}>Login With Google</Button> */}
        </div>
    </div>
  )
}

export default Login