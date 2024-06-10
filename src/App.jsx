/* eslint-disable react/prop-types */
import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login"
import Layout from "./layout/Layout";
function App() {

  return (
    <>
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            </Route>
            <Route path="/auth" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      }
    </>
  )
}

export default App
