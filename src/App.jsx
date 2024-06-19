/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login"
import Layout from "./layout/Layout";
import Dashboard from "./pages/Back-office/Dashboard"
import localstorageServicefrom from './service/localstorage.service'
import PrivateRoute from "./common/PrivateRoute.jsx";
import PublicRoute from "./common/PublicRoute.jsx";
import { RingLoader } from "react-spinners"
function App() {
  const isAuthentication = localstorageServicefrom.getAccesstoken() ? true : false
  const [loading, setLoading] = useState(true);
  const cssOverride = {
  }
  useEffect(() => {
    // Simulate a data loading process
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="spinner-container">
          <RingLoader color={"#123abc"} loading={loading} size={150} cssOverride={cssOverride}
            aria-label="Loading Spinner"
            data-testid="loader" />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/dashboard" element={
                <PrivateRoute isAuthenticated={isAuthentication} >
                  <Dashboard />
                </PrivateRoute>} />
            </Route>
            <Route path="/auth" element={
              <PublicRoute isAuthenticated={isAuthentication}>
                <Login />
              </PublicRoute>}>
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
