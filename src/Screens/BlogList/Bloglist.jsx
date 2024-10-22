import React, { useEffect, useContext, useState } from "react";
import { BlogContext } from "../../context/BlogContext";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { firestore } from "../../config/firebase";
import { ToastContainer, toast } from 'react-toastify';

function Bloglist() {
  const blogctx = useContext(BlogContext);
  const blogCollectionRef = collection(firestore, "blogs");
  const [blogList, setBlogList] = useState([]);

  const fetchDocs = async () => {
    try {
      const Bloglist = await getDocs(blogCollectionRef);
      const blogs = Bloglist.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setBlogList(blogs);
    } catch (error) {
      console.log(error);
      toast.error('Error fetching blogs'); // Show error toast
    }
  };

  useEffect(() => {
    fetchDocs();
  }, []);

  const onBlogDelete = async (id) => {
    try {
      const docRef = doc(firestore, "blogs", id);
      await deleteDoc(docRef);
      toast.success("Blog deleted successfully"); // Show success toast
      fetchDocs();
    } catch (error) {
      console.log(error);
      toast.error("Error deleting blog"); // Show error toast
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick draggable pauseOnHover />
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">List of Blogs</h1>

      {blogList.length === 0 ? (
        <p className="text-center text-gray-500">No blogs available</p>
      ) : (
        <div className="space-y-6">
          {blogList.map((blog) => (
            <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md transition-shadow duration-200 hover:shadow-lg flex flex-col justify-between h-full">
              <div className="text-center"> {/* Center text container */}
                <h2 className="text-2xl font-semibold text-blue-600 mb-2">{blog.title}</h2>
                <p className="text-gray-700 mb-4">{blog.body}</p>
              </div>

              {/* button to delete the blog , will enanled in the future to the profile page */}
              
              {/* <button
                onClick={() => onBlogDelete(blog.id)}
                className="bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-200 mt-4 self-end"
              >
                Delete
              </button> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bloglist;
