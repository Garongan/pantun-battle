import './App.css';
import {BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import MyPersonalData from './pages/MyPersonalData';
import BuatPantun from './pages/BuatPantun';
import ShareIG from './pages/ShareIG';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={process.env.PUBLIC_URL + '/'} element={<Home />} />
        <Route path={process.env.PUBLIC_URL + '/MyPersonalData'} element={<MyPersonalData />} />
        <Route path={process.env.PUBLIC_URL + '/BuatPantun'} element={<BuatPantun />} />
        <Route path={process.env.PUBLIC_URL + '/ShareIG'} element={<ShareIG />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
