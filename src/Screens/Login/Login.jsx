import React, { useContext } from 'react'
import { signInWithPopup } from 'firebase/auth';
import { BlogContext } from '../../context/BlogContext';
import {auth , googleauthprovider} from '../../config/firebase';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    const blogctx = useContext(BlogContext);
    console.log(blogctx);

    const onGoogleLogin = async() => {

        try {

            //login/signup done
          const res =  await signInWithPopup(auth,googleauthprovider);
          blogctx.setState({
            ...blogctx.state ,
            user : res.user
          });

          //save the user in local storage
          localStorage.setItem('user',JSON.stringify(res.user));

          // redirect to home/bloglist screen
          navigate('/');

        } catch (error) {

            //login/signup failed
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
