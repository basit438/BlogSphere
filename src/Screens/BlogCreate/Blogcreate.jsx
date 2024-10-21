import React, { useState } from 'react'
import { firestore } from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

function Blogcreate() {

  const blogCollectionRef = collection(firestore, "blogs");

  const [blog, setBlog] = useState({
    title: "",
    body: ""
  });

  const onInputChange = (e) => {
    const { id, value } = e.target;
    
    setBlog((prevBlog) => ({
      ...prevBlog,
      [id]: value // Ensure that you're updating the correct field
    }));
  };

  const onFormSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Make sure title and body are not empty before adding to Firestore
    if (blog.title.trim() === "" || blog.body.trim() === "") {
      console.log("Title or body cannot be empty");
      return;
    }

    // Store the blog in Firestore
    try {
      await addDoc(blogCollectionRef, blog);
      console.log("Blog added:", blog);
      
      // Reset the form fields after submission
      setBlog({
        title: "",
        body: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Create a new blog</h1>

      {/* Attach the submit handler */}
      <form onSubmit={onFormSubmit}>

        <div>
          <label htmlFor="title">Blog Title</label>
          {/* Add value attribute to make the input controlled */}
          <input 
            onChange={onInputChange} 
            id='title' 
            type="text" 
            value={blog.title} // Controlled input
          />
        </div>

        <div>
          <label htmlFor="body">Blog Body</label>
          {/* Add value attribute to make the textarea controlled */}
          <textarea 
            onChange={onInputChange} 
            id='body' 
            cols="30" 
            rows="10" 
            value={blog.body} // Controlled textarea
          ></textarea>
        </div>
        
        <button type='submit'>Create Blog</button>
      </form>
    </div>
  )
}

export default Blogcreate;
