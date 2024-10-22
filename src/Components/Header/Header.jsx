import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../../context/BlogContext';

function Header() {
  const blogctx = useContext(BlogContext);
//   console.log(blogctx);
  const displayName = blogctx.state.user ? blogctx.state.user.displayName : 'User';

//   const userPhoto = blogctx.state.user ? blogctx.state.user.photoURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABqQIdskCD9BK0I81EbVfV9tTz320XvJ35A&s';

  const userPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQABqQIdskCD9BK0I81EbVfV9tTz320XvJ35A&s";
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Blog Title/Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200">
            BlogSphere
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link 
            to="/" 
            className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Home
          </Link>
          <Link 
            to="/create" 
            className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Create Blog
          </Link>
          <Link 
            to="/profile" 
            className="text-lg font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Profile
          </Link>
          <Link 
            to="/login" 
            className="text-lg font-semibold text-gray-700 hover:text-red-600 transition-colors duration-200">
            Logout
          </Link>
        </nav>

        {/* User Info */}
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
            Hello, <span className="font-bold text-blue-600">{displayName}</span>
          </span>
          
          {/* User Avatar */}
          <img 
            src={userPhoto} 
            alt="user-avatar" 
            className="w-10 h-10 rounded-full border-2 border-blue-500 hover:opacity-90 transition-opacity duration-200" 
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
