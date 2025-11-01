import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Adult from './pages/Adult'
import Kids from './pages/Kids'
import Popcorn from './pages/Popcorn'
import NotFound from './pages/NotFound'
import Mango from './pages/Mango'
import Men from './pages/Men'
import Women from './pages/Women'

const App = () => {
  return (
    <div className='h-screen bg-black text-white '>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} >

          <Route path='adult' element={<Adult />}>
            <Route path='men' element={<Men />} />
            <Route path='women' element={<Women />} />        
          </Route>

          <Route path='mango' element={<Mango />} />
          

          <Route path='popcorn' element={<Popcorn />} />
          <Route path='kids' element={<Kids />} />
        </Route>

        {/* <Route path='/product/items/mango' element={<Mango />} /> */}

        <Route path='*' element={<NotFound />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App
