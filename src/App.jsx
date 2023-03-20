import { useState } from 'react'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import './App.css'
import Home from './components/Home';
import Header from './components/Header';
import Coin from './components/Coin';
import Exchange from './components/Exchange'
import CoinDetails from './components/CoinDetails'
function App() {
 

  return (
  <div className="app">

    <Router>
      <Header />
      <Routes>
        

        <Route path="/" element={<Home></Home>}></Route>
        
        <Route path="/Exchange" element={<Exchange></Exchange>}></Route>
        <Route path="/Coin" element={<Coin></Coin>}></Route>
        <Route path="/Coin/:id" element={<CoinDetails></CoinDetails>}></Route>
    
      </Routes>
    </Router>

  </div>
  )
}

export default App
