import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route></Route>
          {/* <Route path="/home" element={<Home/>}></Route> */}
        </Routes>
      </Router>
      <Header />
    </div>
  );
}

export default App;
