import React, { useContext } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { BlogContext } from '../../context/BlogContext';
import { auth, googleauthprovider } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const blogctx = useContext(BlogContext);

  const onGoogleLogin = async () => {
    try {
      const res = await signInWithPopup(auth, googleauthprovider);
      blogctx.setState({
        ...blogctx.state,
        user: res.user,
      });

      localStorage.setItem('user', JSON.stringify(res.user));

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google Logo"
          className="w-24 mx-auto mb-6"
        />
        <h1 className="text-2xl font-semibold mb-2">Sign in</h1>
        <p className="text-gray-600 mb-6">to continue to BlogSphere</p>
        <button
          onClick={onGoogleLogin}
          className="flex items-center justify-center w-full border border-gray-300 py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
        >
          <img
            src="https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png"
            alt="Google G Logo"
            className=" h-5 mr-3"
          />
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
