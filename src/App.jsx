import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'

function App() {

  return (
    <div className="text-black">
      <Navbar/>
      <Homepage/>
    </div>
  )
}

export default App
