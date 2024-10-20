import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'


function App() {
  
  const router = createBrowserRouter([
    {
      path : "/",
      element : <></>
    },
    {
      path : "/create",
      element : <></>
    },
    {
      path : "./login",
      element : <></>
    }
  ])

  return (
    <>
     
    </>
  )
}

export default App
