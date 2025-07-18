import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home'; 
import Recycle from './pages/Recycle';
import FoodShare from './pages/FoodShare';
import Carpool from './pages/Carpool';
import Redeem from './pages/Redeem';
import SellProducts from './pages/SellProducts';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/*  "/"  */}
        <Route path="/recycle" element={<Recycle />} />
        <Route path="/foodshare" element={<FoodShare />} />
        <Route path="/carpool" element={<Carpool />} />
        <Route path="/redeem" element={<Redeem />} />
        <Route path="/sell" element={<SellProducts />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
