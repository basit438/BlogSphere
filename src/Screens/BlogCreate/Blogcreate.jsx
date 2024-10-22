import React, { useState } from 'react';
import { firestore } from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

function Blogcreate() {
  const blogCollectionRef = collection(firestore, 'blogs');

  const [blog, setBlog] = useState({
    title: '',
    body: '',
  });

  const onInputChange = (e) => {
    const { id, value } = e.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [id]: value, // Ensure that you're updating the correct field
    }));
  };

  const onFormSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    if (blog.title.trim() === '' || blog.body.trim() === '') {
      console.log('Title or body cannot be empty');
      return;
    }

    // Store the blog in Firestore
    try {
      await addDoc(blogCollectionRef, blog);
      console.log('Blog added:', blog);
      // Reset the form fields after submission
      setBlog({ title: '', body: '' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Create a New Blog</h1>

      {/* Attach the submit handler */}
      <form onSubmit={onFormSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Blog Title
          </label>
          <input
            onChange={onInputChange}
            id="title"
            type="text"
            value={blog.title} // Controlled input
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your blog title"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="body" className="block text-gray-700 font-semibold mb-2">
            Blog Body
          </label>
          <textarea
            onChange={onInputChange}
            id="body"
            cols="30"
            rows="10"
            value={blog.body} // Controlled textarea
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write your blog content here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
}

export default Blogcreate;
