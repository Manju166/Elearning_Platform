import { useState } from 'react'
import { BrowserRouter as Rou, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from "./Navbar/Nav"
function App() {

  return (
    <>
      <div>
        <Rou>
          <Nav/>
        </Rou>
      </div>  
    </>
  )
}

export default App
