import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { LoadingScreen,DetailsProduct, Menu} from '../components';
import { Cart, Home, Products, Purchases, Shop} from '../pages';

import {
    HashRouter,
    Routes,
    Route
  } from 'react-router-dom';
import Header from '../components/Header';
import ProtectedRoutes from './ProtectedRoutes';



  
const Routers = () => {
    const isLoading = useSelector(state=>state.isLoading);
   
    return (
      <HashRouter>
        <Header />
        {isLoading && <LoadingScreen />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Products />} />
          <Route path="/details/:id" element={<DetailsProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/shop/:id" element={<Shop />} />
            <Route path="/purchases" element={<Purchases />} />
          </Route>
        </Routes>
      </HashRouter>
    );
};

export default Routers;