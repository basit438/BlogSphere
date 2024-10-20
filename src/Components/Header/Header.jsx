import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
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
        <Link to ="/create">Create Blog</Link>
    </li>
 </ul>
 <div>
    <h1>Hello Basit</h1>
 </div>
 </>
  )
}

export default Header
