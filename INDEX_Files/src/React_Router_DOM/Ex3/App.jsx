import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Items from './pages/Items'
import Kids from './pages/Kids'

const App = () => {
  return (
    <div className='h-screen bg-black text-white '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} >
          <Route path='items' element={<Items />} />
          <Route path='kids' element={<Kids />} />
        </Route>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App
