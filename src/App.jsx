/* eslint-disable react/prop-types */
import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login"
import Layout from "./layout/Layout";
import Dashboard from "./pages/Back-office/Dashboard"
import localstorageServicefrom from './service/localstorage.service'
import PrivateRoute from "./common/PrivateRoute.jsx";
function App() {
  const isAuthentication = localstorageServicefrom.getAccesstoken() ? true : false
  return (
    <>
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/dashboard" element={
                <PrivateRoute isAuthenticated={isAuthentication} >
                  <Dashboard />
                </PrivateRoute>} />
            </Route>
            <Route path="/auth" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      }
    </>
  )
}

export default App
