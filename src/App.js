import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home';
import MyPersonalData from './pages/myPersonalData/MyPersonalData';
import BuatPantun from './pages/buatPantun/BuatPantun';
import ShareIG from './pages/shareIG/ShareIG';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
