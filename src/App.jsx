import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Login from './pages/Login'
import Forget from './pages/Forget'
import Register from './pages/Register'
import Wishlist from './pages/Wishlist'
import ProductDetails from './pages/ProductDetails'
import MyCart from './pages/MyCart'
import Profile from './pages/profile'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/forget" element={<Forget />} />
      
        <Route path='/' element={<Layout />}> 
          <Route index element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/mycart" element={<MyCart/>} />
          <Route path="/shop/:id" element={<ProductDetails/>} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />

        </Route >
      </Routes>
   </BrowserRouter>
  )
}

export default App