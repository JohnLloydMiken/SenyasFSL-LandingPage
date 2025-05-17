import Hero from './Components/Hero.jsx'
import './App.css'
import React, { useEffect } from 'react'

function App() {
 
  useEffect(()=>{
    document.body.style.backgroundColor = "#FAF3E0"
  }, []);

  return (
    <>
      <Hero></Hero>
    </> 
  )
}

export default App
