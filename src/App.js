import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Detail from './pages/detail/Detail';
import Homepage from './pages/homepage/Homepage';
import Uebersicht from './pages/uebersicht/Uebersicht';
import DetailRandom from './pages/detailRandom/DetailRandom';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/uebersicht" element={<Uebersicht />} />
          <Route path={`/detail/:beerId`} element={<Detail />} />
          <Route path={`/random`} element={<DetailRandom />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
