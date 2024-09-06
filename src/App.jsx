import './App.css'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import Footer from './components/Footer/footer';
import Home from './pages/home/home';
import Navbar from './components/NavBar/navbar.jsx';
import FloatingIcons from './components/FloatingIcons/floatingIcons.jsx';

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <FloatingIcons />
    </>
  )
}

export default App
