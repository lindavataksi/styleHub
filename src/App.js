import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <Router>
        <Navbar />
        <Routes>
          <Route></Route>
          {/* <Route path="/home" element={<Home/>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
