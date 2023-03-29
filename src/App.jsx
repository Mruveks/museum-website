import './App.css'
import { Routes, Route } from 'react-router'

import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import Exhibitions from './pages/Exhibitions'

function App() {

  return (
    <div className="text-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
