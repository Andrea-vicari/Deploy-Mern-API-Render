import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from "./Components/Common/Header"
import Footer from "./Components/Common/Footer"
import Home from './Components/Home';
import Update from './Components/Update';
import DashBoard from './Components/DashBoard';
import Login from './Components/Login';
import Signup from './Components/Signup';
import "../src/index.css";

function App() {


  return (
    <React.Fragment>
      <Header />


          <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Signup />}></Route>
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path='/update/:id' element={<Update />}></Route>
              <Route path='/login' element={<Login />}></Route>
            </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
