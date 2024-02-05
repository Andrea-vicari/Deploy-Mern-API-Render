import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from "./Components/Common/Header"
import Footer from "./Components/Common/Footer"
import Home from './Components/Home';
import Update from './Components/Update';
import DashBoard from './Components/DashBoard';
import Login from './Components/Login';
import Signup from './Components/Signup';
import CreateKey from './Components/CreateKey';
import "../src/index.css";

import { UseAuthContext } from "./hooks/UseAuthContext"
import { KeysContextProvider } from "./context/KeysContext";

function App() {

  const {user} = UseAuthContext()
  console.log(user)
  return (
    <KeysContextProvider>

      <Header />


          <Routes>

              <Route path="/" element={user ?<Home />: <Navigate to="/login"/>} />
              <Route path="/register" element={<Signup />}></Route>
              <Route path="/dashboard" element={user ? <DashBoard />: <Navigate to="/login"/>} />
              <Route path='/update/:id' element={<Update />}></Route>
              <Route path='/login' element={!user ? <Login/> : <Navigate to="/"/>}></Route>
              <Route path='/signup' element={<Signup />}></Route>
              <Route path='/createkey' element={<CreateKey />}></Route>

            </Routes>
      <Footer />
    </KeysContextProvider>
  )
}

export default App
