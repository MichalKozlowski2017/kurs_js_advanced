import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Register from 'components/pages/Register/Register';
import Login from 'components/pages/Login/Login';
import App from './components/pages/App/App';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
