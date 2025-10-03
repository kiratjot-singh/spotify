import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer' 
import Maincontent from './Components/Maincontent'
function App() {
  
  return (
    <>
        <div className="App">
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <div className="content">
       <Maincontent/>
        </div>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
