import { createContext } from "react";
import { useState } from "react";

export const BlogContext = createContext();

const BlogContextProvider = (props) =>{

    const [state , setState] = useState({
        user : null ,

    });

    return (
        <>
        <BlogContext.Provider value={{state , setState}}> 
          {props.children}
        </BlogContext.Provider>
        </>
    )
}

export default BlogContextProvider;
