import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Footer Top: Logo and Blog Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* BlogSphere Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-blue-400">BlogSphere</h2>
            <p className="mt-2 text-gray-400">A platform to share your thoughts and stories with the world. We aim to inspire, inform, and entertain through high-quality blog content.</p>
          </div>

          {/* Information about Blogs */}
          <div className="bg-blue-500 p-4 rounded-lg text-gray-100 md:max-w-xs">
            <h3 className="text-lg font-semibold mb-2">Why Choose BlogSphere?</h3>
            <p className="text-sm">BlogSphere offers diverse topics, ranging from technology to lifestyle, written by passionate creators. Join us and make your voice heard!</p>
          </div>
        </div>

        {/* Footer Middle: Links and Social Media Icons */}
        <div className="mt-10 flex justify-between items-center">
          {/* Footer Navigation Links */}
          <nav className="space-x-6">
            <Link to="/" className="text-gray-400 hover:text-blue-400 transition duration-200">
              Home
            </Link>
            <Link to="/create" className="text-gray-400 hover:text-blue-400 transition duration-200">
              Create Blog
            </Link>
            <Link to="/profile" className="text-gray-400 hover:text-blue-400 transition duration-200">
              Profile
            </Link>
            <Link to="/login" className="text-gray-400 hover:text-red-400 transition duration-200">
              Logout
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-200">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-200">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-200">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Footer Bottom: Rights Reserved with Basit Manzoor */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} BlogSphere | Designed and developed by <span className="text-blue-400 font-semibold">Basit Manzoor</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
