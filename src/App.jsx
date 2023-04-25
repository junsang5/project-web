import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  height: 100%;
  color: black;
  flex-direction: row;
`;

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path = {"/"} element={<Home/>}></Route>
            <Route path = {"/about"} element={<About/>}></Route>
            <Route path = {"/products"} element={<Products/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}
export default App;
