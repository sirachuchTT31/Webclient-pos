/* eslint-disable react/prop-types */
import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login"
import Layout from "./layout/Layout";
// import Dashboard from "./pages/Back-office/Dashboard"
import Dashboard from './pages/back-office/Dashboard'
function App() {

  return (
    <>
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/auth" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      }
    </>
  )
}

export default App
