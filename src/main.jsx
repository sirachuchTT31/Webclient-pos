import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Constant from './constant/constant.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={Constant.Api.googleClientId}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
  ,
)
