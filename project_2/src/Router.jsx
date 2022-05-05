import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from 'components/pages/NotFound/NotFound';
import App from './components/pages/App/App';
import MyProfile from './components/pages/MyProfile/MyProfile';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="me" element={<MyProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
