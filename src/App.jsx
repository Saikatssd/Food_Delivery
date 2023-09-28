import './App.css'
import Home from './components/Home'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header.jsx'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Menu from './components/Menu'
import Cart from './components/cart/Cart'

export default function App() {
  return (

    <Router>
      <div className='App'>

        <Header />
        <div className="lg:container mx-auto flex w-full flex-wrap items-center justify-between px-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/eats/stores/:id/menus" element={<Menu />} />
            <Route exact path="/cart" element={<Cart />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}


