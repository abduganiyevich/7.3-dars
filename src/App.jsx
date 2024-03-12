import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Products from './pages/Products/Products'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Cart from './pages/Cart/Cart'
import Error from './pages/Error/Error'
import Header from './pages/Header'
import ProductDetail from './pages/ProductDetail.jsx/ProductDetail'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Header/>
    <div className="container">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path='*' element={<Error/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
