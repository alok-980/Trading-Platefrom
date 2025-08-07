import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import SupportPage from './landing_page/support/SupportPage';
import PricingPage from './landing_page/pricing/PricingPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Login from './landing_page/auth/Login.js';
import Signup from './landing_page/auth/Signup.js';
import Home from './Home.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </CookiesProvider>
);
