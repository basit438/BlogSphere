import React, { useEffect } from "react";
import { BlogContext } from "../../context/BlogContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Bloglist() {
  const blogctx = useContext(BlogContext);

  console.log(blogctx);

  return (
    <div>
      <h1>List blogs here</h1>
    </div>
  );
}

export default Bloglist;
