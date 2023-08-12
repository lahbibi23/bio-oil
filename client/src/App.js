
import React from 'react';
import './App.css';
import {  Routes, Route  } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
   
      <div >
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<CreateAccount/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<ProductDetails/>}/>
        

        </Routes>
        
        
          

      </div>
   
  );
}

export default App;

  

