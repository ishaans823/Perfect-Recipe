import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import MainPage from './pages/home';
import ErrorPage from './pages/error';
import LoginPage from './pages/login';
import AboutPage from './pages/about';
import Navbar from './navbar/navbar';
import DashPage from './pages/dash';

function App() {
  return (
    <>
      <Navbar />
      <div className='routing'>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/dashboard' element={<DashPage/>} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </div>
    </>

  );
}

export default App;
