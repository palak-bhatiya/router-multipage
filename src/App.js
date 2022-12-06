import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './Header';
import Slider from './Slider';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import Contactus from './Contactus';
import Portfolio from './Portfolio';
import Notfound from './Notfound';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Contactus" element={<Contactus/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/Notfound" element={<Notfound/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
