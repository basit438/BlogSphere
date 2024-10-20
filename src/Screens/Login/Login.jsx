import React, { useContext } from 'react'
import { signInWithPopup } from 'firebase/auth';
import { BlogContext } from '../../context/BlogContext';
import {auth , googleauthprovider} from '../../config/firebase';

function Login() {
    const blogctx = useContext(BlogContext);
    console.log(blogctx);

    const onGoogleLogin = async() => {

        try {
          const res =  await signInWithPopup(auth,googleauthprovider);
          console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={onGoogleLogin}>Login with Google</button>
    </div>
  )
}

export default Login
