import logo from './logo.svg';
import './App.css';
import './styles/General.css'
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import SpecialitiesPage from './pages/SpecialitiesPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
          <Route path="/specialities" element={<SpecialitiesPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
