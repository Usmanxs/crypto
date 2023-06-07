import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './components/Home';
import Header from './components/Header';
import Coin from './components/Coin';
import Exchange from './components/Exchange';



function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Exchange" element={<Exchange />} />
            <Route path="/Coin" element={<Coin />} />
          </Routes>
    
        </Router>
      </div>
    </>
  );
}

export default App;
