import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import MyPersonalData from './pages/MyPersonalData';
import BuatPantun from './pages/BuatPantun';
import ShareIG from './pages/ShareIG';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/MyPersonalData' element={<MyPersonalData />} />
        <Route path='/BuatPantun' element={<BuatPantun />} />
        <Route path='/ShareIG' element={<ShareIG />} />
      </Routes>
    </Router>
  );
}

export default App;
