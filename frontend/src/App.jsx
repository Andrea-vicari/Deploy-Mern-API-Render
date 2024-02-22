import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from "./Components/Common/Navbar"
import Header from "./Components/Common/Header"
import Footer from "./Components/Common/Footer"
import Home from './Components/Home';
import Update from './Components/Update';
import DashBoard from './Components/DashBoard';
import Login from './Components/Login';
import Signup from './Components/Signup';
import "../src/index.css";

import { UseAuthContext } from "./hooks/UseAuthContext"
import KeyboardUser from './Components/KeyboardUser';

function App() {

  const {user} = UseAuthContext()
  console.log(user)
  return (
    <React.Fragment>

      <Header />


          <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Signup />}></Route>
              <Route path="/dashboard" element={user ? <DashBoard />: <Navigate to="/login"/>} />
              <Route path='/update/:id' element={<Update />}></Route>
              <Route path='/login' element={user ? <DashBoard />: <Login />}></Route>
              <Route path='/signup' element={<Signup />}></Route>
              <Route path='/keyboarduser' element={<KeyboardUser />}></Route>
            </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
