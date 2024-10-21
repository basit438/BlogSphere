import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BlogContext } from '../../context/BlogContext';

function Header() {

   const blogctx = useContext(BlogContext);

   // Ensure blogctx.state.user exists before accessing displayName
   const displayName = blogctx.state.user ? blogctx.state.user.displayName : 'User';

   // console.log(displayName);

   return (
      <>
         <div>
            <h1>BlogSphere</h1>
         </div>
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/create">Create Blog</Link>
            </li>
         </ul>
         <div>
            <h1>Hello {displayName}</h1>
         </div>
      </>
   );
}

export default Header;
