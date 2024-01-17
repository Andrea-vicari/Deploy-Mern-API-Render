import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./Components/Common/Header"
import Footer from "./Components/Common/Footer"
import Home from './Components/Home';
import Update from './Components/Update';
import DashBoard from './Components/DashBoard';
import "../src/index.css";

function App() {


  return (
    <React.Fragment>
      <Header />


          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/DashBoard" element={<DashBoard />} />
              <Route path='/update/:id' element={<Update />}></Route>
            </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
