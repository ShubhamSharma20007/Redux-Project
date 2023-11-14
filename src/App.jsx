import { useState } from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Cart from './Pages/Cart'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
