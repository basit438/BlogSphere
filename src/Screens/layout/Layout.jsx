import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { BlogContext } from '../../context/BlogContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function layout() {

    const blogctx = useContext(BlogContext);

    const navigate = useNavigate();

    useEffect(() => {

        const user = localStorage.getItem('user');
        const userData = JSON.parse(user);

        // if user is not logged in then redirect to login page
        if(!blogctx.state.user && !userData) {
            navigate('/login');
          }
    }, []);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  )
}

export default layout
