import React from 'react'
import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPage from './pages/home';
import ErrorPage from './pages/error';
import LoginPage from './pages/login';
import AboutPage from './pages/about';
import Navbar from './navbar/navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className='routing'>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </div> 
    </>

  );
}

export default App;
