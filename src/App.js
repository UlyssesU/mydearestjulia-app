import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GiftGuides from './pages/GiftGuides';
import Recipes from './pages/Recipes';
import Reviews from './pages/Reviews';
import StoreFront from './pages/StoreFront';
import AboutMe from './pages/AboutMe';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/giftguides' element={<GiftGuides />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/storefront' element={<StoreFront />} />
          <Route path='/aboutme' element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;