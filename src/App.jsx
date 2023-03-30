import './App.css'
import { Routes, Route } from 'react-router'

import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import Exhibitions from './pages/Exhibitions'
import { BecomeAMember, BuyTickets, FoodAndDrink, PlanYourVisit } from './pages/index.js'

function App() {

  return (
    <div className="text-black">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exhibitions" element={<Exhibitions />} />

        <Route path="/visit/plan-your-visit" element={<PlanYourVisit />} />
        <Route path="/visit/buy-tickets" element={<BuyTickets />} />
        <Route path="/visit/membership" element={<BecomeAMember />} />
        <Route path="/visit/dining" element={<FoodAndDrink />} />
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
