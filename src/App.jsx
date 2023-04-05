import './App.css'
import { Routes, Route } from 'react-router'

import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'
import Exhibitions from './pages/exhibitionsAndEvents/Exhibitions'
import Performances from './pages/exhibitionsAndEvents/Performances'
import { BecomeAMember, BuyTickets, FoodAndDrink, PlanYourVisit, Accessibility } from './pages/index.js'

function App() {

  return (
    <div className="text-black w-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/visit/plan-your-visit" element={<PlanYourVisit />} />
        <Route path="/visit/buy-tickets" element={<BuyTickets />} />
        <Route path="/visit/membership" element={<BecomeAMember />} />
        <Route path="/visit/dining" element={<FoodAndDrink />} />
        <Route path="/learn/accessibility" element={<Accessibility />} />

        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/events/performances" element={<Performances />} />
      </Routes> 
      
      <Footer/>
    </div>
  )
}

export default App
